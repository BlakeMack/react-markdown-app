# React Markdown app

This is application uses React and Express to render and serve Markdown content. It includes a server that uses the Express framework, a React front-end, and a Markdown parser using the react-markdown package.

Getting Started
To get started, clone this repository to your local machine and run the following command to install all required dependencies:

```
npm install
```
Once all dependencies are installed, you can start the development server using the following command:

```
npm run dev
```
This will start the Vite development server and the Express server concurrently.

Scripts

dev: This script starts the development server with hot-reloading enabled. To run this script, use the following command: npm run dev.

test: This script runs all tests in the tests directory. To run this script, use the following command: npm test.

# Dependencies
This app uses the following dependencies:


* express: For creating the web server

* mocha: For unit testing

* mongoose: For interacting with MongoDB databases

* react: For building the front-end

* react-dom: For rendering the front-end

* react-markdown: For parsing Markdown content

* react-router-dom: For client-side routing

* chai: For unit testing

* cors: For enabling CORS requests

* dotenv: For loading environment variables


# Dev Dependencies
This app uses the following development dependencies:

* @vitejs/plugin-react: For integrating React with Vite

* concurrently: For running multiple scripts concurrently

* nodemon: For automatically restarting the server when changes are made

* supertest: For testing HTTP endpoints

* vite: For serving and building the front-end
