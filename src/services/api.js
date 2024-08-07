import axios from "axios";

export const api = axios.create({
    baseURL: "https://my-portfolio-back-shiy.onrender.com"
})