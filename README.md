# Project README 🎉

## Project Overview 🌐

This project is a full-stack application designed to create a dynamic portfolio page by leveraging **Flask** for the backend and **Next.js** for the frontend. It integrates with the **LinkedIn API** to fetch user profile data, allowing users to input a LinkedIn profile URL and display the relevant information in a structured format. The application showcases personal details, experience, education, projects, skills, and certifications.

---

## Features 🚀

- **Backend**:  
  - Built with **Flask**, providing a REST API to retrieve LinkedIn profile data using the `linkedin-api` library.
  
- **Frontend**:  
  - Developed using **Next.js** and **React**, ensuring a responsive and user-friendly interface to display the fetched LinkedIn profile data.

---

## Project Structure 🗂️

```plaintext
├── backend/        # Contains the Flask application and API logic
├── frontend/       # Contains the Next.js frontend code
```

---

## Requirements 📋

### Backend

- **Python**: 3.10+
- **Flask**
- **linkedin-api** library
- Additional dependencies listed in `requirements.txt`

### Frontend

- **Node.js**
- **Next.js**
- **React.js**

---

## Setup Instructions ⚙️

### Backend Setup (Flask)

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Namit2111/Linkedin-to-resume
   cd backend
   ```

2. **Create a virtual environment**:

   Using a virtual environment is recommended for managing dependencies.

   ```bash
   python3 -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:

   Use the `requirements.txt` file to install the necessary libraries.

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure LinkedIn API credentials**:

   Add your LinkedIn username and password to the `config/config.py` file:

   ```python
   l_username = "your_linkedin_username"
   l_pass = "your_linkedin_password"
   ```

5. **Run the Flask server**:

   ```bash
   flask run
   ```

   The server will be accessible at `http://127.0.0.1:5000/`.

### Frontend Setup (Next.js)

1. **Navigate to the `frontend` directory**:

   ```bash
   cd ../frontend
   ```

2. **Install Node.js dependencies**:

   Ensure Node.js is installed, then run:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Run the development server**:

   Start the Next.js development server:

   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:3000`.

---

## How the Project Works 🔍

1. The user sends a **POST** request to the `/api/linkedin/get-data` endpoint with a LinkedIn profile URL.
2. The Flask backend utilizes the `linkedin-api` library to fetch the profile information.
3. The Next.js frontend displays the retrieved data, including the user's name, headline, summary, experience, education, skills, projects, certifications, and languages, in a well-organized portfolio layout.

---

## Running Both Frontend and Backend ⚡

To run both the backend and frontend concurrently:

1. **Start the Flask backend**:

   ```bash
   cd backend
   flask run
   ```

2. **In a separate terminal, start the Next.js frontend**:

   ```bash
   cd frontend
   npm run dev
   ```

You can now access the frontend at `http://localhost:3000` and interact with the backend API to fetch and display LinkedIn profile data.

---

## Contribution Guidelines 🤝

We welcome contributions to enhance this project! Here are some ways you can help:

1. **Fork the repository** and create your branch:
   ```bash
   git checkout -b feature-branch
   ```
2. **Make your changes** and commit them:
   ```bash
   git commit -m 'Add new feature'
   ```
3. **Push to your branch**:
   ```bash
   git push origin feature-branch
   ```
4. **Create a pull request** explaining your changes.

---

## Troubleshooting 🛠️

- **Flask server not running**: Ensure you have activated your virtual environment and installed all dependencies correctly.
- **LinkedIn API issues**: Check your LinkedIn credentials in `config/config.py` and ensure your account settings allow API access.
- **Frontend not loading**: Make sure the Next.js server is running and check for any console errors in your browser.

---

## Potential Future Enhancements 🌟

- **User Authentication**: Implement user authentication for secure access to saved profiles.
- **Improved UI**: Enhance the user interface with additional design elements and animations.
- **Data Export**: Allow users to export their portfolio as a PDF or other formats.
- **Profile Comparison**: Enable users to compare multiple LinkedIn profiles side by side.
```
---

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
