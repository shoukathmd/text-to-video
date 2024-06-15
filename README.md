# Personalized Outbound Video Generator

## Introduction
 The application leverages the Synthesia API and OpenAI to create personalized outbound videos based on user input, demonstrating a practical use case of integrating AI capabilities into a web application.


## Features

- Responsive front-end interface for user input
- Integration with the Synthesia API for video generation
- AI-driven script generation using OpenAI's GPT-3.5-turbo model
- Video download functionality as an MP4 file.
- Deployment on Vercel for public accessibility


## Usage

1. Open the application in your web browser.
2. Enter the Company Info, Product Info, and Target Group Profile in the respective fields.
3. Click the "Generate Video" button.
4. Wait for the video to be generated.
5. Once the video is ready, you can view and download it as an MP4 file.

## Deployment

The application is deployed on Vercel. You can access it [here](https://text-to-video-one.vercel.app/).


## Challenges and Solutions

### Challenge: Integrating Multiple APIs

Integrating both the OpenAI and Synthesia APIs required careful handling of asynchronous operations and error handling. Ensuring that the script was generated before calling the Synthesia API was crucial.

**Solution**: Implemented robust error handling and fallback mechanisms. If the OpenAI API fails to generate a script, the application uses the `productInfo` as a fallback script.

### Challenge: Handling Rate Limits with Synthesia API
While integrating with the Synthesia API, I encountered a 429 response issue, indicating rate limiting. This hindered the ability to fully test the application.

Solution: However, due to these constraints, full testing of the application was limited.

### Challenge: Responsive and User-Friendly UI

Creating a responsive and intuitive UI that provides a seamless user experience across different devices was a priority.

**Solution**: Used modern CSS techniques and media queries to ensure responsiveness. Conducted user testing to gather feedback and refine the UI.

## Future Improvements

- Enhance error handling to provide more detailed feedback to users.
- Implement user authentication to save and manage generated videos.
- Add more customization options for video generation.
- Integrate with additional AI models for diverse script generation capabilities.
- Refactor the codebase to adhere more closely to SOLID principles, ensuring better maintainability, scalability, and readability.

---
