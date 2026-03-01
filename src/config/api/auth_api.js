import axios from "axios";

const url = import.meta.env.VITE_AUTH_API;

export const auth_api = axios.create({
    baseURL: url,
    withCredentials: true,
});

const getUser = async () => {
    const result = await auth_api.get("/getUser");

    return result.data;
};

const logout = async () => {
    await auth_api.post("/logout");
};

export { getUser, logout };
