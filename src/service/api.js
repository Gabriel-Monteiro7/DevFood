import axios from "axios";

const apiRecipe = axios.create({
  baseURL: "https://api-java-spring-boot.herokuapp.com/api",
});
const apiUser = axios.create({
  baseURL: "https://apicadastrouser.herokuapp.com",
});
const api = { apiRecipe, apiUser };
export default api;
