# Personalized Outbound Video Generator

## Introduction
 The application leverages the Synthesia API and OpenAI to create personalized outbound videos based on user input, demonstrating a practical use case of integrating AI capabilities into a web application.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Code Overview](#code-overview)
- [Challenges and Solutions](#challenges-and-solutions)
- [Future Improvements](#future-improvements)

## Features

- Responsive front-end interface for user input
- Integration with the Synthesia API for video generation
- AI-driven script generation using OpenAI's GPT-3.5-turbo model
- Video download functionality as an MP4 file
- Deployment on Vercel for public accessibility

## Setup and Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/shoukathmd/text-to-video.git
    cd personalized-outbound-video-generator
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Environment Variables**

    Create a `.env` file in the root directory and add the following:

    ```env
    REACT_APP_SYNTHESIA_API_KEY=746ee48b3c0121d39170d3c01757066e
    REACT_APP_OPENAI_API_KEY=your_openai_api_key
    ```

4. **Run the Application**

    ```bash
    npm start
    ```

## Usage

1. Open the application in your web browser.
2. Enter the Company Info, Product Info, and Target Group Profile in the respective fields.
3. Click the "Generate Video" button.
4. Wait for the video to be generated.
5. Once the video is ready, you can view and download it as an MP4 file.

## Deployment

The application is deployed on Vercel. You can access it [here](https://text-to-video-one.vercel.app/).

To deploy your own version:

1. Create a Vercel account if you don't have one.
2. Link your GitHub repository to Vercel.
3. Set up the necessary environment variables in the Vercel project settings.
4. Deploy the project.

## Code Overview

### Components

- `Layout1.jsx`: Main component handling user input and video generation logic.
- `VideoDisplay.js`: Component responsible for displaying the video or a placeholder image during loading.

### API Integration

- **Synthesia API**: Used for video generation based on the script.
- **OpenAI API**: Generates the script from the user input.

### Key Functions

- `generateVideoScriptPrompt`: Generates the prompt for the OpenAI API.
- `generateScript`: Calls the OpenAI API to generate a script.
- `generateVideo`: Calls the Synthesia API to generate the video.
- `checkVideoStatus`: Polls the Synthesia API to check the status of the video generation.

## Challenges and Solutions

### Challenge: Integrating Multiple APIs

Integrating both the OpenAI and Synthesia APIs required careful handling of asynchronous operations and error handling. Ensuring that the script was generated before calling the Synthesia API was crucial.

**Solution**: Implemented robust error handling and fallback mechanisms. If the OpenAI API fails to generate a script, the application uses the `productInfo` as a fallback script.

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
