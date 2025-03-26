# Web Scraper

This is a simple web scraper initially intended for Amazon, but due to Amazon's policies against automation, the focus was shifted to eBay to avoid captchas or bypassing restrictions.

## Important Notes
- Images may not render properly in Firefox due to its protection mechanisms that block rendering from external URLs.
- The repository contains both the **backend** and **frontend**.

## Technologies Used
- **Backend**: Express, Axios, JSDOM, TypeScript
- **Frontend**: HTML, CSS, Vanilla JavaScript, Vite

## Installation and Usage
### Prerequisites
- Ensure **Bun** is installed on your system.
- Make sure that port 8080 (for the backend) and port 5173 (for the frontend) are free on your machine. Alternatively, you can change the ports in the config.js file at the root.

### Steps
1. Clone the repository:
   
   ```sh
   git clone https://github.com/ajpf44/web-scraper-ebay.git
   ```

2. Navigate to the project folder and install dependencies:
   
   ```sh
   bun install
   ```

3. Start the application:
   
   ```sh
   bun run start
   ```

## Contact
If you have any questions, feel free to reach out: ajpf44@gmail.com

