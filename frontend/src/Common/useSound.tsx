import { useEffect } from 'react';
import { Howl } from 'howler';

function useSound(src: any, volume = 1, fadeoutTime = 0) {
  let sound: any;
  const soundStop = () => sound.stop();
  const soundPlay = (s: any) => {
    sound = new Howl(s);
    sound.volume(volume);
    sound.play();
  };

  useEffect(() => {
    soundPlay(src);
    sound.on('play', () => {
      const fadeouttime = fadeoutTime;
      setTimeout(() => sound.fade(volume, 0, fadeouttime), (sound.duration() - sound.seek()) * 1000 - fadeouttime);
    });
    return soundStop;
  }, []);
}

export default useSound;
