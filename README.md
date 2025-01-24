

# Currency Converter App

A simple React-based currency converter application that uses the [ExchangeRate-API](https://www.exchangerate-api.com/) to fetch real-time currency conversion rates.

---

## Features
- Convert between multiple currencies (USD, EUR, GBP, JPY, INR, etc.).
- Stylish UI with background images and currency icons.
- Built with React and styled using `styled-components`.
- Dockerized for easy deployment.
![image](https://github.com/user-attachments/assets/e008f78a-790a-4181-a3ca-75b518f8a69e)

---

## Prerequisites
- Node.js (v16 or higher)
- Docker (optional, for containerization)
- An API key from [ExchangeRate-API](https://www.exchangerate-api.com/)

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/currency-converter.git
cd currency-converter
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add Your API Key
1. Sign up for a free API key at [ExchangeRate-API](https://www.exchangerate-api.com/).
2. Create a `.env` file in the root of the project:
   ```bash
   touch .env
   ```
3. Add your API key to the `.env` file:
   ```plaintext
   REACT_APP_API_KEY=your_api_key_here
   ```

### 4. Run the App Locally
Start the development server:
```bash
npm start
```
The app will be available at `http://localhost:3000`.

---

## Docker Instructions

### 1. Build the Docker Image
To build the Docker image, run:
```bash
docker build -t omkara25/currency-converter-app .
```

### 2. Run the Docker Container
To run the container locally:
```bash
docker run -d -p 3000:80 --name currency-converter omkara25/currency-converter-app
```
Access the app at `http://localhost:3000`.

### 3. Push the Docker Image to Docker Hub
1. Log in to Docker Hub:
   ```bash
   docker login
   ```
2. Tag the image (if not already tagged):
   ```bash
   docker tag omkara25/currency-converter-app omkara25/currency-converter-app:latest
   ```
3. Push the image to Docker Hub:
   ```bash
   docker push omkara25/currency-converter-app:latest
   ```

---

## Environment Variables
The following environment variables are used in the app:

| Variable Name       | Description                          | Example Value                |
|---------------------|--------------------------------------|------------------------------|
| `REACT_APP_API_KEY` | Your API key from ExchangeRate-API   | `1234567890abcdef1234567890` |

---

## Project Structure
```
currency-converter/
├── src/
│   ├── components/           # React components
│   │   └── CurrencyConverter.js
│   ├── assets/               # Images and icons
│   ├── App.js                # Main application component
│   ├── index.js              # Entry point
│   └── styles/               # Global styles (optional)
├── public/                   # Static files
├── Dockerfile                # Docker configuration
├── nginx.conf                # Nginx configuration (optional)
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```

---

## API Key Instructions
1. Sign up at [ExchangeRate-API](https://www.exchangerate-api.com/).
2. Get your free API key.
3. Add the API key to the `.env` file as shown above.

---

## Docker Commands Cheat Sheet

### Build the Docker Image
```bash
docker build -t omkara25/currency-converter-app .
```

### Run the Docker Container
```bash
docker run -d -p 3000:80 --name currency-converter omkara25/currency-converter-app
```

### Push to Docker Hub
```bash
docker push omkara25/currency-converter-app:latest
```

---

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
- [ExchangeRate-API](https://www.exchangerate-api.com/) for providing the currency conversion API.
- [React](https://reactjs.org/) for the front-end framework.
- [Docker](https://www.docker.com/) for containerization.

---

## Contact
For questions or feedback, please contact:
- **Omkara**  
  GitHub: [omkara25](https://github.com/omkara25)

---

Enjoy converting currencies! 🚀

---

### Notes
- Replace `your-repo` in the clone command with your actual repository URL.
- Replace `your_api_key_here` with your actual API key from ExchangeRate-API.
- Replace `omkara25` with your Docker Hub username if different.

Let me know if you need further assistance! 😊
