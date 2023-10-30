import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { SoundContextType } from "../@types/sounds";
import SlideshowContext from "./slideshow-context";

export const SoundContext = createContext<SoundContextType | null>(null);

const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [volume, setVolume] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [doorSoundLoaded, setDoorSoundLoaded] = useState<boolean>(false);
  const [doorSound, setDoorSound] = useState<HTMLAudioElement | null>(null);

  const [bridgeSoundLoaded, setBridgeSoundLoaded] = useState<boolean>(false);
  const [bridgeSound, setBridgeSound] = useState<HTMLAudioElement | null>(null);

  const [powerUpSoundLoaded, setPowerUpSoundLoaded] = useState<boolean>(false);
  const [powerUpSound, setPowerUpSound] = useState<HTMLAudioElement | null>(
    null
  );

  const [powerDownSoundLoaded, setPowerDownSoundLoaded] =
    useState<boolean>(false);
  const [powerDownSound, setPowerDownSound] = useState<HTMLAudioElement | null>(
    null
  );

  const [gentrySoundLoaded, setGentrySoundLoaded] = useState<boolean>(false);
  const [gentrySound, setGentrySound] = useState<HTMLAudioElement | null>(null);

  const [hyperspaceSoundLoaded, setHyperspaceSoundLoaded] =
    useState<boolean>(false);
  const [hyperspaceSound, setHyperspaceSound] =
    useState<HTMLAudioElement | null>(null);

  const [volumeUpSound, setVolumeUpSound] = useState<HTMLAudioElement | null>(
    null
  );
  const [volumeDownSound, setVolumeDownSound] =
    useState<HTMLAudioElement | null>(null);

  const [buttonSoundsLoaded, setButtonSoundsLoaded] = useState<boolean>(false);
  const [buttonSounds, setButtonSounds] = useState<HTMLAudioElement[]>([]);

  const [loaded, setLoaded] = useState<boolean>(false);
  const [volumeUpSoundLoaded, setVolumeUpSoundLoaded] = useState(false);

  const slideCtx = useContext(SlideshowContext);
  const { isFocused } = slideCtx!;
  const isFocusedRef = useRef(isFocused);

  let audCtx: AudioContext;

  const NUM_BUTTON_SOUNDS = 8;

  const isPlayingMemo = useMemo(() => isPlaying, [isPlaying]);

  const openDoor = useCallback(() => {
    if (!isPlaying) {
      return;
    }
    if (doorSoundLoaded) {
      doorSound!.pause();
      doorSound!.currentTime = 0;
      if (doorSound) {
        doorSound.volume = 1.0;
      }
      doorSound!.play();
    }
  }, [doorSound, doorSoundLoaded, isPlaying]);

  const buttonNoise = useCallback(
    (index?: number) => {
      if (!isPlaying) {
        return;
      }
      let x =
        index == null
          ? Math.floor(Math.random() * NUM_BUTTON_SOUNDS)
          : index % NUM_BUTTON_SOUNDS;
      buttonSounds[x].play();
    },
    [buttonSounds, isPlaying]
  );

  const playBridgeSound = useCallback(() => {
    if (!bridgeSound?.paused || !isPlayingMemo) {
      return;
    }
    hyperspaceSound?.pause();
    gentrySound?.pause();
    bridgeSound?.play();
  }, [bridgeSound, gentrySound, hyperspaceSound, isPlayingMemo]);

  const playPowerUpSound = useCallback(() => {
    if (!powerUpSound?.paused || !isPlayingMemo) {
      return;
    }
    powerUpSound?.play();
  }, [powerUpSound, isPlayingMemo]);

  const playPowerDownSound = useCallback(() => {
    if (!powerDownSound?.paused || !isPlayingMemo) {
      return;
    }
    powerDownSound?.play();
  }, [powerDownSound, isPlayingMemo]);

  const playGentrySound = useCallback(() => {
    if (!gentrySound?.paused || !isPlayingMemo) {
      return;
    }
    bridgeSound?.pause();
    hyperspaceSound?.pause;
    if (gentrySound) {
      gentrySound.volume = 0.5;
    }

    gentrySound?.play();
  }, [hyperspaceSound, bridgeSound, gentrySound, isPlayingMemo]);

  const playHyperspaceSound = useCallback(() => {
    if (!gentrySound?.paused || !hyperspaceSound?.paused || !isPlayingMemo) {
      return;
    }
    bridgeSound?.pause();
    playPowerUpSound();

    let random = Math.floor(Math.random() * 2);

    if (random == 1) {
      gentrySound?.pause();
      if (hyperspaceSound) {
        hyperspaceSound.volume = 0.35;
      }

      hyperspaceSound?.play();
    } else {
      hyperspaceSound?.pause();
      if (gentrySound) {
        gentrySound.volume = 0.35;
      }

      gentrySound?.play();
    }
  }, [
    hyperspaceSound,
    bridgeSound,
    gentrySound,
    isPlayingMemo,
    playPowerUpSound,
  ]);

  const playVolumeUp = useCallback(() => {
    gentrySound?.pause();
    hyperspaceSound?.pause();
    bridgeSound?.pause();
    volumeUpSound?.play();
    if (isFocusedRef.current) {
      if (bridgeSound) {
        playBridgeSound();
      }
    } else {
      if (hyperspaceSound) {
        playHyperspaceSound();
      }
    }
  }, [
    volumeUpSound,
    playBridgeSound,
    bridgeSound,
    playHyperspaceSound,
    hyperspaceSound,
    isFocusedRef,
    gentrySound,
  ]);

  const pauseBridgeSound = useCallback(() => {
    bridgeSound?.pause();
  }, [bridgeSound]);

  const pauseHyperspaceSound = useCallback(() => {
    hyperspaceSound?.pause();
  }, [hyperspaceSound]);

  const pausePowerUpSound = useCallback(() => {
    powerUpSound?.pause();
  }, [powerUpSound]);

  const pausePowerDownSound = useCallback(() => {
    powerDownSound?.pause();
  }, [powerDownSound]);

  const pauseGentrySound = useCallback(() => {
    gentrySound?.pause();
  }, [gentrySound]);

  const playVolumeDown = useCallback(() => {
    if (bridgeSound) {
      pauseBridgeSound();
      pauseHyperspaceSound();
      pauseGentrySound();
    }
  }, [bridgeSound, pauseBridgeSound, pauseHyperspaceSound, pauseGentrySound]);

  const loadSound = useCallback((src: string, loop: boolean = false) => {
    let sound: HTMLAudioElement = document.createElement("audio");
    if ("src" in sound) {
      sound.autoplay = false;
    }
    sound.src = src;
    if (loop) {
      sound.loop = true;
    }
    document.body.appendChild(sound);
    return sound;
  }, []);

  const loadButtonSounds = useCallback(() => {
    if (!buttonSoundsLoaded) {
      for (let i = 0; i < NUM_BUTTON_SOUNDS; i++) {
        const newSound = loadSound(`/sounds/tos-computer-0${i + 1}.mp3`);
        setButtonSounds((buttonSounds) => [...buttonSounds, newSound]);
        setButtonSoundsLoaded(true);
      }
    }
  }, [buttonSoundsLoaded, loadSound]);

  const loadBridgeSound = useCallback(() => {
    if (!bridgeSoundLoaded) {
      setBridgeSound(loadSound("/sounds/tos_bridge_2.mp3", true));
      setBridgeSoundLoaded(true);
    }
  }, [bridgeSoundLoaded, loadSound]);

  const loadPowerUpSound = useCallback(() => {
    if (!powerUpSoundLoaded) {
      setPowerUpSound(loadSound("/sounds/power-up.mp3"));
      setPowerUpSoundLoaded(true);
    }
  }, [powerUpSoundLoaded, loadSound]);

  const loadPowerDownSound = useCallback(() => {
    if (!powerDownSoundLoaded) {
      setPowerDownSound(loadSound("/sounds/power-down.mp3"));
      setPowerDownSoundLoaded(true);
    }
  }, [powerDownSoundLoaded, loadSound]);

  const loadGentrySound = useCallback(() => {
    if (!gentrySoundLoaded) {
      setGentrySound(loadSound("/sounds/beat1.mp3", true));
      setGentrySoundLoaded(true);
    }
  }, [gentrySoundLoaded, loadSound]);

  const loadHyperspaceSound = useCallback(() => {
    if (!hyperspaceSoundLoaded) {
      setHyperspaceSound(loadSound("/sounds/hyperspace.mp3", true));
      setHyperspaceSoundLoaded(true);
    }
  }, [hyperspaceSoundLoaded, loadSound]);

  const loadVolumeUpSound = useCallback(() => {
    if (!volumeUpSoundLoaded) {
      setVolumeUpSound(loadSound("/sounds/tos_alien_sound_2.mp3"));
      setVolumeDownSound(loadSound("/sounds/tos_alien_sound_3.mp3"));
      setVolumeUpSoundLoaded(true);
    }
  }, [volumeUpSoundLoaded, loadSound]);

  const loadDoorSound = useCallback(() => {
    if (!doorSoundLoaded) {
      setDoorSound(loadSound("/sounds/tos-turboliftdoor.mp3"));
      setDoorSoundLoaded(true);
    }
  }, [setDoorSound, loadSound, setDoorSoundLoaded, doorSoundLoaded]);

  const toggleSound = useCallback(() => {
    if (isPlayingMemo) {
      volumeDownSound?.play();
    }
    setIsPlaying(!isPlaying);

    if (!loaded) {
      loadButtonSounds();
      loadDoorSound();
      loadBridgeSound();
      loadHyperspaceSound();
      loadPowerUpSound();
      loadPowerDownSound();
      loadGentrySound();
      setLoaded(true);
    }
  }, [
    isPlayingMemo,
    loadButtonSounds,
    loadDoorSound,
    setLoaded,
    loaded,
    volumeDownSound,
    loadBridgeSound,
    loadHyperspaceSound,
    isPlaying,
    loadPowerUpSound,
    loadPowerDownSound,
    loadGentrySound,
  ]);

  const playTone = useCallback(
    (noteInt: number, numProjects: number) => {
      let audCtx = new window.AudioContext();
      if (!isPlayingMemo) {
        return;
      }

      const bluesSounds = [
        174.61, // F (3)
        207.65, // A flat
        233.08, // B flat
        246.94, // B
        261.63, // C
        311.13, // E flat
        349.23, // F (4)
        415.3, // A flat
        466.16, // B flat
      ];

      const bluesSounds2 = [
        349.23, // F (4)
        415.3, // A flat
        466.16, // B flat
        493.88, // B
        523.25, // C
        622.25, // E flat
        698.46, // F (5)
        830.61, // A flat
        932.33, // B flat
        987.77, // B
        1046.5, // C
        1244.51, // E flat
        1396.91, // F (6)
        1661.22, // A flat
        1864.66, // B flat
        1975.53, // B
        2093.0, // C
        2489.02, // E flat
        2793.83, // F (7)
        3322.44, // A flat
        3729.31, // B flat
        3951.07, // B
        4186.01, // C
      ];

      if (!audCtx) {
        // @ts-ignore
        audCtx = new window.AudioContext();
      }
      let context = audCtx;
      let osc = context.createOscillator();
      let gainNode = context.createGain();
      osc.frequency.value = bluesSounds2[noteInt % bluesSounds2.length];
      gainNode.gain.value = 0.5;

      osc.connect(gainNode);
      if (typeof context.createStereoPanner !== "undefined") {
        let panner = context.createStereoPanner();
        panner.pan.value = noteInt / numProjects;
        gainNode.connect(panner);
        panner.connect(context.destination);
      } else {
        gainNode.connect(context.destination);
      }

      try {
        osc.start();
        osc.stop(context.currentTime + 1);
      } catch (e) {
        console.log("audio context cannot start");
      }

      const decrementAmount = 0.05;
      setTimeout(() => {
        let soundFadeInterval = setInterval(() => {
          gainNode.gain.value = gainNode.gain.value - decrementAmount;
          if (gainNode.gain.value <= 0) {
            clearInterval(soundFadeInterval);
          }
        }, 5);
      }, 250);
    },
    [isPlayingMemo]
  );

  useEffect(() => {
    if (isPlayingMemo) {
      playVolumeUp();
    } else {
      playVolumeDown();
    }
  }, [isPlayingMemo, playVolumeUp, playVolumeDown]);

  return (
    <SoundContext.Provider
      value={{
        volume,
        isPlaying,
        openDoor,
        buttonNoise,
        loadDoorSound,
        loadButtonSounds,
        toggleSound,
        playTone,
        loadVolumeUpSound,
        playVolumeUp,
        loadBridgeSound,
        playBridgeSound,
        pauseBridgeSound,
        loadHyperspaceSound,
        playHyperspaceSound,
        pauseHyperspaceSound,
        loadPowerUpSound,
        playPowerUpSound,
        pausePowerUpSound,
        loadPowerDownSound,
        playPowerDownSound,
        pausePowerDownSound,
        loadGentrySound,
        playGentrySound,
        pauseGentrySound,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export default SoundProvider;
