Instructions to Run the Application:

1.  **Prerequisites:**
    * Ensure you have Node.js and npm installed on your system. You can download them from https://nodejs.org/.

2.  **Install Dependencies:**
    * Open a terminal or command prompt.
    * Navigate to the root directory of the project (the `3230-final` folder).
    * Run the following command to install the necessary packages:
        ```
        npm install
        ```

3.  **Run the Application:**
    * You will need two separate terminals open in the project's root directory (`3230-final`).
    * **In Terminal 1:** Start the frontend development server (Vite):
        ```
        npm run dev
        ```
        This will typically compile the Vue.js application and make it available on a local port (like `http://localhost:5173`). Check the terminal output for the exact address.

    * **In Terminal 2:** Start the backend API server (Express):
        ```
        node server.js
        ```
        This will start the server that provides the car inventory data, usually on `http://localhost:3000`.

4.  **Access the Application:**
    * Open your web browser and navigate to the address provided by the `npm run dev` command (usually `http://localhost:5173`).

Notes:
* The frontend application (running via `npm run dev`) connects to the backend API (running via `node server.js`) to fetch car data. Both must be running simultaneously for the application to work correctly.
* The car data is stored in `public/data/db.json`.
* No specific admin accounts or database import steps seem necessary based on the provided code.
