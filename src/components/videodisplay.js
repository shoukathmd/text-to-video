// VideoDisplay.jsx
import React from "react";
import "./css/style.css";
import "./css/general.css";
import "./css/queries.css";

const VideoDisplay = ({ loading, videoResponse }) => {
  return (
    <div className="cta-img-box" role="video">
      {loading ? (
        <div className="loading-box">
          <h2>Generating video...</h2>
        </div>
      ) : videoResponse?.download ? (
        <video
          src={videoResponse.download}
          controls
          loop
          autoPlay
          muted
        ></video>
      ) : (
        <img
          src="https://cdn.prod.website-files.com/65a0dbe5f0b1e9091b635b21/65a276c34621b6acf873dc9e_Software%20Industry.png"
          alt="Placeholder"
          className="placeholder-image"
        />
      )}
    </div>
  );
};

export default VideoDisplay;
