import axios from "axios";

const url = import.meta.env.VITE_PIC_API;

export const pic_apis = axios.create({
    baseURL: url,
    withCredentials: true,
});

const getDefaultPics = async () => {
    const response = await pic_apis.get("/getProfiles");

    return response.data;
};

export { getDefaultPics };
