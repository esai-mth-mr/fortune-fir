import CryptoJS from "crypto-js";
import { TOKEN_SECRET_KEY } from "../constant";

// Encrypt a string
export function encryptToken(text: string): string {
    return CryptoJS.AES.encrypt(text, TOKEN_SECRET_KEY).toString();
}

// Decrypt a string
export function decryptToken(ciphertext: string): string {
    const bytes = CryptoJS.AES.decrypt(ciphertext, TOKEN_SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
}
