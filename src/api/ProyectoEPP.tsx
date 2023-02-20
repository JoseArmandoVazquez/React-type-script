import axios from "axios";

const baseURL ='https://localhost:7203/api/';
const proyectoEPPApi = axios.create({baseURL});

export default proyectoEPPApi;