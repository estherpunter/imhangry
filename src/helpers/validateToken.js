import { jwtDecode } from "jwt-decode";

export function validateToken(token) {
    try {
        const decodedToken = jwtDecode(token);
        const currentTimestamp = Date.now() / 1000; // in seconds


        if (decodedToken.exp && decodedToken.exp < currentTimestamp) {
            return null;
        }

        return decodedToken;
    } catch (e) {
        console.error(e);
        return null;
    }
}
