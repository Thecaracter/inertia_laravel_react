# News Portal Project


This project is a News Portal developed using 

![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png) 
+ 
![Laravel Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/100px-Laravel.svg.png)

for the frontend with Tailwind CSS and Laravel for the backend. It provides a platform to publish, manage, and display news articles.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization.
- News articles CRUD operations.
- Categorized news articles.
- Responsive design for various devices.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Composer](https://getcomposer.org/)
- [PHP](https://www.php.net/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Thecaracter/inertia_laravel_react.git
    cd inertia_laravel_react
    ```

2. **Setup Frontend:**

    ```bash
    cd frontend
    npm install
    # or using yarn
    # yarn install
    ```

3. **Setup Backend:**

    ```bash
    cd backend
    composer install
    cp .env.example .env
    php artisan key:generate
    # Edit .env file to configure your database
    php artisan migrate
    php artisan db:seed # (Optional: Seed sample data)
    ```

4. **Run the Application:**

    - Start the Laravel backend:

        ```bash
        cd backend
        php artisan serve
        ```

        The backend will be running at `http://localhost:8000`.

    - Start the React frontend:

        ```bash
        cd frontend
        npm start
        # or using yarn
        # yarn start
        ```

        The frontend will be running at `http://localhost:3000`.

## Usage

- Visit `http://localhost:3000` to access the news portal frontend.
- Use the provided authentication system to log in and manage news articles.

## Folder Structure

```plaintext
news-portal/
|-- backend/          # Laravel backend
|-- frontend/         # React frontend
|-- .gitignore
|-- LICENSE
|-- README.md
|-- ...

Technologies Used
 React with Tailwind CSS
 Laravel
MySQL
HTML, CSS, JavaScript
Contributing
Feel free to contribute to this project. You can open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

In this template, I've added the React and Laravel logos using the Markdown syntax for images with alt text and URLs. You can replace the URLs with your preferred image URLs if needed.
