import axios from 'axios'

const apiRecipe = axios.create({
    baseURL:'https://receitas.devari.com.br/api/v1/'
})
const apiUser = axios.create({
    baseURL:'https://receitas.devari.com.br/'
})
const api = {apiRecipe,apiUser}
export default api;