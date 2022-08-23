import axios from "axios";
const url = "http://localhost:1337/api/test-collections?populate=*";
export const readCollection = () => axios.get(url);