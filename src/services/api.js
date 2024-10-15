import axios from "axios";

export const api = axios.create({
    baseURL: "https://my-portfolio-back-production-10f6.up.railway.app"
})