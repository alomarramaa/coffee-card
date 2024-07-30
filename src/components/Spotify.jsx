import React from 'react';
import './Spotify.css';



const Spotify = () => {
  return (
    <div className="spotify-playlist-container">
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/7kDhGOUJ9myNvihg7jILlI?utm_ssource=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Spotify;
