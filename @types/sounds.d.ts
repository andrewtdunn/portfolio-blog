export type SoundContextType = {
  isPlaying: boolean;
  volume: number;
  openDoor: () => void;
  buttonNoise: (buttonNoise?) => void;
  loadDoorSound: () => void;
  loadButtonSounds: () => void;
  toggleSound: () => void;
  playTone: (x: number, y: number) => void;
  loadVolumeUpSound: () => void;
  playVolumeUp: () => void;
  loadBridgeSound: () => void;
  playBridgeSound: () => void;
  pauseBridgeSound: () => void;
  loadHyperspaceSound: () => void;
  playHyperspaceSound: () => void;
  pauseHyperspaceSound: () => void;

  loadPowerUpSound: () => void;
  playPowerUpSound: () => void;
  pausePowerUpSound: () => void;

  loadPowerDownSound: () => void;
  playPowerDownSound: () => void;
  pausePowerDownSound: () => void;

  loadGentrySound: () => void;
  playGentrySound: () => void;
  pauseGentrySound: () => void;
};
