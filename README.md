# Project README

## Project Overview

This is a full-stack project built using **Flask** as the backend framework and **Next.js** for the frontend. The project integrates with the **LinkedIn API** to fetch user profile data and display it on a portfolio page. It allows users to input a LinkedIn profile URL, retrieves the relevant profile data, and displays it in a well-structured portfolio format. 

The backend uses Flask and the `linkedin-api` library to interact with LinkedIn, while the frontend is built using Next.js to provide a responsive UI displaying the fetched data, such as personal details, experience, education, projects, skills, and certifications.

---

## Features

- **Backend**:  
  The backend, powered by Flask, includes a REST API to fetch LinkedIn profile data using the `linkedin-api` library.
  
- **Frontend**:  
  The frontend uses React and Next.js to display the fetched LinkedIn profile data in a user-friendly portfolio layout.

---

## Project Structure

- `backend/`: Contains the Flask application and API logic.
- `frontend/`: Contains the Next.js frontend code to display the portfolio.
  
---

## Requirements

### Backend

- Python 3.10+
- Flask
- linkedin-api library
- `requirements.txt` for other dependencies

### Frontend

- Node.js
- Next.js
- React.js

---

## Setup Instructions

### Backend Setup (Flask)

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Namit2111/Linkedin-to-resume
   cd Linkedin-to-resume/backend
   ```

2. **Create a virtual environment**:

   It is recommended to use a virtual environment to manage dependencies.

   ```bash
   python3 -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:

   Use the `requirements.txt` file to install all required libraries.

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure LinkedIn API credentials**:

   Ensure you have your LinkedIn username and password configured in the `config/config.py` file:

   ```python
   l_username = "your_linkedin_username"
   l_pass = "your_linkedin_password"
   ```

5. **Run the Flask server**:

   ```bash
   flask run
   ```

   The server will be running at `http://127.0.0.1:5000/`.

### Frontend Setup (Next.js)

1. **Navigate to the `frontend` directory**:

   ```bash
   cd ../frontend
   ```

2. **Install Node.js dependencies**:

   Make sure you have Node.js installed. Then install the required dependencies using npm or yarn:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Run the development server**:

   After installing the dependencies, start the Next.js development server:

   ```bash
   npm run dev
   ```

   This will start the frontend at `http://localhost:3000`.

---

## How the Project Works

- The user sends a **POST** request to the `/api/linkedin/get-data` endpoint with a LinkedIn profile URL.
- The Flask backend uses the `linkedin-api` library to fetch the LinkedIn profile information.
- The frontend uses React and Next.js to display the retrieved data, including the user's name, headline, summary, experience, education, skills, projects, certifications, and languages, in a well-organized portfolio layout.


## Running Both Frontend and Backend

After setting up both the backend and frontend, you can run them concurrently:

1. Start the Flask backend:

   ```bash
   cd backend
   flask run
   ```

2. In another terminal, start the Next.js frontend:

   ```bash
   cd frontend
   npm run dev
   ```

You can now access the frontend via `http://localhost:3000` and interact with the backend API to fetch and display LinkedIn profile data.

---

