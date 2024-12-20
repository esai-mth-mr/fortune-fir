import { decryptToken } from "./cryptToken";

// Function to set the Authorization token globally
const setAuthToken = (): any | null => {
    const pretoken = localStorage.getItem('token');

    if (pretoken) {
        const token = decryptToken(pretoken);
        return {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
    } else {
        return null

    }
};

export default setAuthToken;
