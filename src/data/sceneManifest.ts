export interface SceneConfig {
  id: string;
  name: string;
  startProgress: number;
  endProgress: number;
  cameraPosition: [number, number, number];
  cameraLookAt: [number, number, number];
  lighting: {
    royalBlueIntensity: number;
    goldRimIntensity: number;
    ambientIntensity: number;
  };
  environmentPreset: 'dark-sapphire' | 'royal-vault' | 'gold-gallery' | 'archival-tunnel';
}

export const sceneManifest: SceneConfig[] = [
  {
    id: "arrival-chamber",
    name: "Scene 01 • Arrival Chamber",
    startProgress: 0.0,
    endProgress: 0.12,
    cameraPosition: [0, 1.2, 12],
    cameraLookAt: [0, 0.8, 0],
    lighting: {
      royalBlueIntensity: 0.8,
      goldRimIntensity: 0.6,
      ambientIntensity: 0.2
    },
    environmentPreset: "dark-sapphire"
  },
  {
    id: "color-portal",
    name: "Scene 02 • Color Portal",
    startProgress: 0.12,
    endProgress: 0.25,
    cameraPosition: [0, 2.0, 8],
    cameraLookAt: [0, 1.0, -2],
    lighting: {
      royalBlueIntensity: 1.8,
      goldRimIntensity: 1.2,
      ambientIntensity: 0.3
    },
    environmentPreset: "royal-vault"
  },
  {
    id: "product-vault",
    name: "Scene 03 • Flagship Product Vault",
    startProgress: 0.25,
    endProgress: 0.40,
    cameraPosition: [0, 1.1, 4],
    cameraLookAt: [0, 0.9, 0],
    lighting: {
      royalBlueIntensity: 1.2,
      goldRimIntensity: 2.5,
      ambientIntensity: 0.4
    },
    environmentPreset: "gold-gallery"
  },
  {
    id: "sisterhood-gallery",
    name: "Scene 04 • Sisterhood Gallery",
    startProgress: 0.40,
    endProgress: 0.55,
    cameraPosition: [2, 1.5, 6],
    cameraLookAt: [0, 1.0, 0],
    lighting: {
      royalBlueIntensity: 1.0,
      goldRimIntensity: 1.0,
      ambientIntensity: 0.5
    },
    environmentPreset: "dark-sapphire"
  },
  {
    id: "customization-atelier",
    name: "Scene 05 • Customization Atelier",
    startProgress: 0.55,
    endProgress: 0.70,
    cameraPosition: [-1.5, 1.3, 3.5],
    cameraLookAt: [0, 0.9, 0],
    lighting: {
      royalBlueIntensity: 1.4,
      goldRimIntensity: 1.8,
      ambientIntensity: 0.4
    },
    environmentPreset: "gold-gallery"
  },
  {
    id: "legacy-tunnel",
    name: "Scene 06 • Legacy Tunnel",
    startProgress: 0.70,
    endProgress: 0.82,
    cameraPosition: [0, 1.0, -10],
    cameraLookAt: [0, 1.0, -25],
    lighting: {
      royalBlueIntensity: 0.6,
      goldRimIntensity: 1.5,
      ambientIntensity: 0.2
    },
    environmentPreset: "archival-tunnel"
  },
  {
    id: "collection-universe",
    name: "Scene 07 • Collection Universe (120 Real Pieces)",
    startProgress: 0.82,
    endProgress: 0.93,
    cameraPosition: [0, 3.0, 14],
    cameraLookAt: [0, 1.0, 0],
    lighting: {
      royalBlueIntensity: 2.0,
      goldRimIntensity: 2.0,
      ambientIntensity: 0.5
    },
    environmentPreset: "royal-vault"
  },
  {
    id: "commerce-transition",
    name: "Scene 08 • Commerce & Concierge Portal",
    startProgress: 0.93,
    endProgress: 1.0,
    cameraPosition: [0, 1.0, 2.5],
    cameraLookAt: [0, 1.0, 0],
    lighting: {
      royalBlueIntensity: 1.5,
      goldRimIntensity: 1.5,
      ambientIntensity: 0.6
    },
    environmentPreset: "gold-gallery"
  }
];
