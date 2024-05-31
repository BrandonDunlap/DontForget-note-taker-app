# Note Taker

## Description

Note Taker is a simple web application that allows users to write, save, and delete notes. This application uses an Express.js backend to handle note data stored in a JSON file. The frontend is built using HTML, CSS, and JavaScript.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Screenshots](#screenshots)

## Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/BrandonDunlap/DontForget-note-taker-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd DontForget-note-taker-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the server:
    ```bash
    node server.js
    ```
5. Open your web browser and go to `http://localhost:3000`.

## Usage

1. Click on the "Get Started" button on the landing page.
2. On the notes page, you can view existing notes on the left and add a new note by entering a title and text on the right.
3. Click the save icon to save a new note.
4. Click on an existing note to view it.
5. Click the pencil icon to start a new note.
6. Click the trash icon to delete a note.

## API Endpoints

- `GET /api/notes`: Retrieves all saved notes.
- `POST /api/notes`: Saves a new note.
- `DELETE /api/notes/:id`: Deletes a note by ID.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Screenshots

![Landing Page](public\assets\images\landing-page.png)
![Notes Page](public\assets\images\notes-page.png)

