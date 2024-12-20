import axios from 'axios';
import { BACKEND_URL } from "../constant"

export default axios.create({
    baseURL: BACKEND_URL
});