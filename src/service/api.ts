// a biblioteca "axios" serve para fazer requisições de uma API de forma "melhor"
import axios from 'axios';

const api = axios.create({
   baseURL: 'https://pokeapi.co/api/v2/'
})

export default api;