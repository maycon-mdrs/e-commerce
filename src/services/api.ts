import axios from "axios";
import { getUserLocalStorage } from "../context/AuthProvider/util";

/**
 * Criação de uma instância do Axios para realizar requisições à API.
 */
export const Api = axios.create({
    baseURL: "https://reqres.in/api/",
});

/**
 * Interceptador de requisições para adicionar o token de autenticação ao cabeçalho.
 */
Api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage();

        config.headers.Authorization = user?.token;
        return config;
    }, 
    (error) => {
        return Promise.reject(error);
    }
);
