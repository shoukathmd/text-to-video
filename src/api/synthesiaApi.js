import api from "./api";

const URLS = {
  makeVideo: "https://api.synthesia.io/v2/videos",
};

export const getVideo = async (videoId) => {
  try {
    const response = await api.get(`${URLS.makeVideo}/${videoId}`, {
      headers: {
        Authorization: process.env.REACT_APP_SYNTHESIA_API_KEY,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("error", error);
  }
};

export const generateVideo = async (script) => {
  try {
    const response = await api.post(
      URLS.makeVideo,
      {
        test: true,
        input: [
          {
            scriptText: script,
            avatar: "anna_costume1_cameraA",
            background: "green_screen",
          },
        ],
      },
      {
        headers: {
          Authorization: process.env.REACT_APP_SYNTHESIA_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("error", error);
  }
};
