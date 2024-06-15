// openaiApi.js
import api from "./api";

const URLS = {
  generateScript: "https://api.openai.com/v1/completions",
};

export const generateScript = async (prompt) => {
  try {
    const response = await api.post(
      URLS.generateScript,
      {
        model: "gpt-3.5-turbo", // Specify the model you want to use
        prompt: prompt,
        max_tokens: 150, // Adjust based on your needs
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error generating script:", error);
    return null; // Return null in case of an error
  }
};
