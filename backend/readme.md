# LinkedIn to Portfolio Backend

## Project Overview 🌐
This is the backend component of the **LinkedIn to Portfolio** project, built using Flask. It integrates with the LinkedIn API to fetch user profile data and provides a RESTful API for the frontend to display this information in a portfolio format.

## Features ✨
- **REST API**: Fetch LinkedIn profile data using the `linkedin-api` library.
- **User Authentication**: Secure access to the LinkedIn API using user credentials.
- **Data Retrieval**: Retrieve personal details, experience, education, projects, skills, and certifications from LinkedIn profiles.

## Requirements 📦
- Python 3.10+
- Flask
- `linkedin-api` library

## Setup Instructions 🛠️

### Backend Setup (Flask)
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Namit2111/Linkedin-to-resume
   cd backend
   ```

2. **Create a Virtual Environment**:
   It is recommended to use a virtual environment to manage dependencies.
   ```bash
   python3 -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies**:
   Use the `requirements.txt` file to install all required libraries.
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure LinkedIn API Credentials**:
   Ensure you have your LinkedIn username and password configured in the `config/config.py` file:
   ```python
   l_username = "your_linkedin_username"
   l_pass = "your_linkedin_password"
   ```

5. **Run the Flask Server**:
   Start the Flask server using:
   ```bash
   flask run
   ```
   The server will be running at [http://127.0.0.1:5000/](http://127.0.0.1:5000/).

## How the Project Works 🔍
1. The user sends a POST request to the `/api/linkedin/get-data` endpoint with a LinkedIn profile URL.
2. The Flask backend utilizes the `linkedin-api` library to fetch the LinkedIn profile information.
3. The retrieved data includes the user's name, headline, summary, experience, education, skills, projects, certifications, and languages, which are made available to the frontend for display.

## Running Both Frontend and Backend 🚀
To run both components of the project:
1. **Start the Flask Backend**:
   ```bash
   cd backend
   flask run
   ```

2. **Start the Next.js Frontend**:
   Open another terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   npm run dev
   ```
   Access the frontend via [http://localhost:3000](http://localhost:3000) to interact with the backend API.

## License 📄
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgments 🙏
- Thanks to the developers of the `linkedin-api` library for providing a great tool to interact with LinkedIn's API.

For any issues or contributions, feel free to open an issue or submit a pull request!