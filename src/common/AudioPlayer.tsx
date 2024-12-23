// import { useEffect, useRef } from "react";
// import wavfile from "../../public/sounds/main_page.mp3";

import { useEffect } from "react";

const AudioPlayer = () => {
  // const audioRef = useRef(new Audio(wavfile));

  useEffect(() => {
    // const audio = audioRef.current;
    // // Set the audio to loop
    // audio.loop = true;
    // // Play the audio
    // audio.play();
    // // Cleanup function to pause the audio when the component unmounts
    // return () => {
    //   audio.play();
    // };
  }, []);

  return null; // This component doesn't need to render anything
};

export default AudioPlayer;
