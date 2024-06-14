import React from "react";
import { useState } from "react";
import "./style.css";
import "./general.css";
import "./queries.css";

function Layout1() {
  const [data, setData] = useState({
    companyInfo: "",
    productInfo: "",
    targetGroupProfile: "",
  });

  function handleChange(e) {
    console.log(data);
    const { name, value } = e.target;
    setData((prevVal) => {
      return { ...prevVal, [name]: value };
    });
    console.log(data);
  }

  function submitData() {}

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
            <div className="cta-img-box" role="video">
              <video
                src="https://synthesia-ttv-data.s3-eu-west-1.amazonaws.com/video_data/3aa0c5fc-707d-4e66-a34d-a73e7df919a6/transfers/rendered_video.mp4"
                controls
                loop
                autoPlay
                muted
              ></video>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="download-icon"
                aria-label="download-video"
                onClick={downloadVideo}
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
                <title>Download Video</title>
              </svg>
            </div>
            <button className="btn btn--form">Generate Video</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Layout1;
