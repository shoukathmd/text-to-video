// Layout1.jsx
import React, { useState } from "react";
import "./css/style.css";
import "./css/general.css";
import "./css/mediaqueries.css";
import { generateVideo, getVideo } from "../api/synthesiaApi";
import { generateScript } from "../api/openaiApi";
import VideoDisplay from "./videodisplay";

function Layout1() {
  const [data, setData] = useState({
    companyInfo: "",
    productInfo: "",
    targetGroupProfile: "",
  });

  const [errors, setErrors] = useState({
    companyInfo: "",
    productInfo: "",
    targetGroupProfile: "",
  });

  const [videoResponse, setVideoResponse] = useState(null);
  const [videoStatus, setVideoStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  /**
   * Handle input changes and validate fields.
   * @param {Event} e - The event object from the input change.
   */
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevVal) => ({ ...prevVal, [name]: value }));

    // Validate the input length
    if (
      (name === "companyInfo" || name === "productInfo") &&
      value.length < 50
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "This field must contain at least 50 characters.",
      }));
    } else if (name === "targetGroupProfile" && value.length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "This field must contain at least 3 characters.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  }

  /**
   * Generate the prompt for video script creation.
   * @param {string} companyInfo - Information about the company.
   * @param {string} productInfo - Information about the product.
   * @param {string} targetGroupProfile - Profile of the target group.
   * @returns {string} The generated prompt.
   */
  function generateVideoScriptPrompt(
    companyInfo,
    productInfo,
    targetGroupProfile
  ) {
    return `Create a video script for a synthetic video using Synthesia. The video should include the following information:

Company Information: ${companyInfo}

Product Information: ${productInfo}

Target Group Profile: ${targetGroupProfile}

The script should be engaging, informative, and tailored to the target group profile. Ensure the script highlights the key features of the product and its benefits to the target audience. The tone should be professional yet approachable.`;
  }

  /**
   * Check the status of the video generation process.
   * @param {string} videoId - The ID of the video to check.
   */
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

  /**
   * Handle the process of generating a video.
   */
  async function handleGenerateVideo() {
    const { companyInfo, productInfo, targetGroupProfile } = data;

    // Check for validation errors before proceeding
    if (
      companyInfo.length < 50 ||
      productInfo.length < 50 ||
      targetGroupProfile.length < 3
    ) {
      alert(
        "Please ensure all fields meet the minimum character requirements."
      );
      return;
    }

    setLoading(true);

    // Generate the prompt
    const videoScriptPrompt = generateVideoScriptPrompt(
      companyInfo,
      productInfo,
      targetGroupProfile
    );

    try {
      // Call the OpenAI API to generate the script
      const script = await generateScript(videoScriptPrompt);
      console.log("Generated Script:", script);

      // Call the Synthesia API to generate the video with the script
      const response = await generateVideo(script);
      console.log(response);
      setVideoResponse(response);
      localStorage.setItem("videoResponse", JSON.stringify(response));
      checkVideoStatus(response.id); // Start checking the status
    } catch (error) {
      console.error("Error generating video:", error);
      setLoading(false);
    }
  }

  /**
   * Handle the video download process.
   */
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
                  {errors.companyInfo && (
                    <p className="error">{errors.companyInfo}</p>
                  )}
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
                  {errors.productInfo && (
                    <p className="error">{errors.productInfo}</p>
                  )}
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
                  {errors.targetGroupProfile && (
                    <p className="error">{errors.targetGroupProfile}</p>
                  )}
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
