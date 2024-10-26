# Contributing Guidelines

Thank you for your interest in contributing to this project! Your help is greatly appreciated. Please take a moment to review these guidelines before starting.

## Table of Contents

1. [How to Contribute](#how-to-contribute)
2. [Code of Conduct](#code-of-conduct)
3. [Reporting Issues](#reporting-issues)
4. [Pull Request Process](#pull-request-process)
5. [Coding Standards](#coding-standards)
6. [Setting Up Development Environment](#setting-up-development-environment)

---

## How to Contribute

### 1. Reporting Issues
If you encounter any issues or bugs, please open an issue on our [GitHub Issues](https://github.com/yourusername/backend-generator-cli/issues) page. Provide a clear description of the problem and steps to reproduce it.

### 2. Feature Requests
We love hearing your ideas! If you have a feature request, please create a new issue and describe the feature you would like to see, including its potential benefits.

### 3. Contributing Code

If you'd like to contribute code, please follow these steps:

#### Fork the Repository

1. Click the "Fork" button in the upper right corner of the repository.

2. Clone your forked repository to your local machine:
```bash
   git clone https://github.com/yourusername/backend-generator-cli.git
```

### Create a New Branch
1. **Create a new branch for your feature or bug fix:**

```bash
git checkout -b my-feature-branch
```

**Make Your Changes**

1. **Make the necessary changes to the codebase.**
2. **Ensure your code follows the project's coding style and conventions.**
3. **Add tests for any new features or changes to existing functionality.**

### Commit Your Changes

1. **Stage your changes:**
```bash
git add .
```

2. *Commit your changes with a descriptive message:*
```bash
git commit -m "Add feature: [brief description]"
```

### Push to Your Fork

*Push your changes to your forked repository:*
```bash
git push origin my-feature-branch
```

## Create a Pull Request
1. *Go to the original repository and click on "Pull Requests."*
2. *Click "New Pull Request."*
3. *Select your branch and provide a description of your changes.*
4. *Click "Create Pull Request."*

## Waiting for Review:
A project maintainer will review your pull request. Be open to feedback, and feel free to ask questions or discuss any requested changes.

---

## Code of Conduct

We expect all contributors to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please be respectful, inclusive, and collaborative when interacting with others in the project.

---

## Reporting Issues

If you encounter bugs, have feature requests, or would like to ask for help, please follow these steps:

1. **Check for existing issues**: Before submitting a new issue, please search the existing issues to see if the problem has already been reported or addressed.
2. **Create a new issue**: If no issue exists, create a new one. Provide as much information as possible, including steps to reproduce the bug (if applicable).
3. **Feature Requests**: Be clear about what you'd like to see in the project and the potential use case for others.

---

## Pull Request Process

1. **Fork the repository** and create a new branch for your changes. Ensure the branch is based off the `main` branch.
2. **Describe your changes**: When creating a pull request, provide a clear description of what the changes are and why they are necessary.
3. **Ensure tests pass**: Your pull request should pass all tests, and additional tests should be written for any new features.
4. **Review and Feedback**: Be open to suggestions and feedback from project maintainers during the review process.
5. **Final Merge**: After approval, your changes will be merged into the `main` branch.

---

## Coding Standards

- **Python (Backend)**: Follow [PEP 8](https://pep8.org/) coding standards for Python.
- **JavaScript/React (Frontend)**: Use [Airbnb's JavaScript style guide](https://github.com/airbnb/javascript) for consistency.
- **Commit Messages**: Follow these conventions for commit messages:
  - Use the imperative, present tense: "Fix bug" (not "Fixed bug" or "Fixes bug").
  - Limit the subject line to 50 characters or less.
  - Use the body to explain what changes were made and why, if necessary.

---

## Setting Up Development Environment

### Backend (Flask)

1. **Clone the repository** and navigate to the `backend` directory.
2. **Set up a virtual environment**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
4. **Run the Flask app**:
   ```bash
   flask run
   ```

### Frontend (Next.js)

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install Node.js dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

---

## Additional Resources

- **Documentation**: Make sure to update the documentation when applicable.
- **Testing**: All changes should include tests where appropriate.
