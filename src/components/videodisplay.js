// VideoDisplay.jsx
import React from "react";
import "./css/style.css";
import "./css/general.css";
import "./css/mediaqueries.css";

const VideoDisplay = ({ loading, videoResponse }) => {
  return (
    <div className="cta-img-box" role="video">
      {loading && (
        <div className="loading-box" style={{ color: "red" }}>
          <h2>Generating video...</h2>
        </div>
      )}
      {!videoResponse?.download && (
        <img
          src="https://cdn.prod.website-files.com/65a0dbe5f0b1e9091b635b21/65a276c34621b6acf873dc9e_Software%20Industry.png"
          alt="Placeholder"
          className="placeholder-image"
        />
      )}
      {videoResponse?.download && (
        <video
          src={videoResponse.download}
          controls
          loop
          autoPlay
          muted
        ></video>
      )}
    </div>
  );
};

export default VideoDisplay;
