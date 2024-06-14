// Layout1.jsx
import React, { useState } from "react";
import "./css/style.css";
import "./css/general.css";
import "./css/queries.css";
import { generateVideo, getVideo } from "../api/synthesiaApi";
import VideoDisplay from "./videodisplay";

function Layout1() {
  const [data, setData] = useState({
    companyInfo: "",
    productInfo: "",
    targetGroupProfile: "",
  });

  const [videoResponse, setVideoResponse] = useState(null);
  const [videoStatus, setVideoStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  }

  async function checkVideoStatus(videoId) {
    const intervalId = setInterval(async () => {
      const response = await getVideo(videoId);
      setVideoStatus(response.status);
      console.log("Video Status:", response.status);

      if (response.status === "complete") {
        clearInterval(intervalId);
        console.log("Video generation complete:", response);
      }
    }, 5000); // Check every 5 seconds
  }

  async function handleGenerateVideo() {
    setLoading(true);
    const samplePostBody = {
      test: false,
      visibility: "public",
      input: [
        {
          scriptText:
            "Hello, World! This is my first synthetic video, made with the Synthesia API!",
          avatar: "anna_costume1_cameraA",
          background: "green_screen",
          title: "Personalized outbound video for sales",
        },
      ],
    };
    try {
      console.log("Post call");
      const response = await generateVideo(
        "Hello, World! This is my first synthetic video, made with the Synthesia API!"
      );
      console.log(response);
      setVideoResponse(response);
      localStorage.setItem("videoResponse", JSON.stringify(response));
      checkVideoStatus(response.id); // Start checking the status
    } catch (error) {
      console.error("Error generating video:", error);
      setLoading(false);
    }
  }

  function downloadVideo() {
    const videoElement = document.querySelector(".cta-img-box video");
    const videoUrl = videoElement.src;
    const link = document.createElement("a");
    link.href = videoUrl;
    link.download = "video.mp4"; // Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <main>
      <section className="section-cta">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">Free AI Video Generator</h2>
              <form className="cta-form" action="#">
                <div>
                  <label htmlFor="companyInformation">Company Info.</label>
                  <textarea
                    id="companyInformation"
                    rows="3"
                    cols="60"
                    name="companyInfo"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="productInformation">
                    Product Information
                  </label>
                  <textarea
                    id="productInformation"
                    rows="3"
                    cols="60"
                    name="productInfo"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="targetGroupProfile">
                    Target Group Profile
                  </label>
                  <textarea
                    id="targetGroupProfile"
                    rows="3"
                    cols="60"
                    name="targetGroupProfile"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </form>
            </div>
            <VideoDisplay loading={loading} videoResponse={videoResponse} />
            <button onClick={handleGenerateVideo} className="btn btn--form">
              Generate Video
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Layout1;
