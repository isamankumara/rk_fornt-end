import { LOGIN_REQUEST } from "../constants/auth.constants";

export const submitLogin = (user_name: string, password: string) => {
    return {
        type: LOGIN_REQUEST,
        payload: { email: user_name, password },
    };
};
