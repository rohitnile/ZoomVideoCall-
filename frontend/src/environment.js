let IS_PROD = true;
const server = IS_PROD ?
    "https://backend-service-psbe.onrender.com" :

    "http://localhost:8000"


export default server;