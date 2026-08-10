// utils/api.ts
export const API_BASE = "/api";

export async function fetchJSON<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${text || res.statusText}`);
  }
  if (!text || !text.trim()) {
    return null as T;
  }
  try {
    return JSON.parse(text) as T;
  } catch (err) {
    console.warn(`[fetchJSON] Failed to parse JSON from ${url}:`, text);
    return null as T;
  }
}
