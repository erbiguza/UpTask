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

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
        const response = await pic_apis.post("/upload", formData);
    } catch (error) {
        console.log(error.response);
    }
};

export { getDefaultPics, uploadImage };
