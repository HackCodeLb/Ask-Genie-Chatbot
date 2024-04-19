# Ask Genie Chatbot

Welcome to the "Ask Genie" chatbot repository! This project demonstrates the construction of a simple chat interface that users can interact with. The frontend is built using HTML, CSS, and JavaScript, while the backend relies on Flask, a lightweight Python web framework.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Project Description

The "Ask Genie" chatbot is designed to simulate a simple conversational agent that can process user input and provide responses. This project is great for anyone interested in learning how to integrate a simple frontend with a backend API.

## Features

- Real-time messaging interface.
- Backend API interaction.
- Dynamic response simulation to enhance user experience.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Python Flask
- **API**: OpenAI (optional for advanced response handling)

## Getting Started

### Prerequisites

- Python 3.6 or higher
- pip (Python package installer)

### Installation

1. **Clone the repository**
git clone https://github.com/HackCodeLb/Ask-Genie-Chatbot.git
cd Ask-Genie-Chatbot

2. **Set up a virtual environment (optional but recommended)**
python -m venv venv
source venv/bin/activate # On Windows use venv\Scripts\activate

3. **Install dependencies**
pip install flask flask-cors

4. **Environment setup**
Create a `.env` file in the root directory and add your OpenAI API key:

OPENAI_API_KEY=your_openai_api_key_here

5. **Start the Flask application**
python app.py


6. **Visit the application**
Open your web browser and go to `http://localhost:5000`.

## Usage

Interact with the chatbot through the web interface at `http://localhost:5000`. Type your questions or messages into the input box and receive responses from the backend.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

- Fork the Project
- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the Branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## Acknowledgments

- Flask
- OpenAI
- GitHub Pages