import { Howl } from 'howler';

function effectSound(src: any, volume = 1) {
  let sound;
  const soundInject = (s: any) => {
    sound = new Howl(s);
    sound.volume(volume);
  };
  soundInject(src);
  return sound;
}

export default effectSound;
