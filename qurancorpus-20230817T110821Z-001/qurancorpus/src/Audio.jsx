import React from "react";
 
import { useState, useEffect } from 'react';

const QuranAudio = () => {
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [audioSrc, setAudioSrc] = useState('');

  useEffect(() => {
    if (selectedAuthor) {
      // fetch audio file for selected author
      fetch(`/api/audio/${selectedAuthor}`)
        .then(response => response.json())
        .then(data => setAudioSrc(data.url))
        .catch(error => console.error(error));
    }
  }, [selectedAuthor]);

  const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
  }

  const handlePlay = () => {
    const audio = document.getElementById('quran-audio');
    audio.play();
  }

  const handlePause = () => {
    const audio = document.getElementById('quran-audio');
    audio.pause();
  }

  return (
    <div>
      <h1>Quran Audio</h1>
      <select value={selectedAuthor} onChange={handleAuthorChange}>
        <option value="">Select an author</option>
        <option value="abul-ala-maududi">Abul Ala Maududi</option>
        <option value="ahmed-ali">Ahmed Ali</option>
        <option value="mohammed-pickthall">Mohammed Pickthall</option>
      </select>
      <br />
      <audio id="quran-audio" src={audioSrc}></audio>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default QuranAudio;
