import axios from "axios";

const url = import.meta.env.VITE_TASKS_API;

export const tasks_api = axios.create({
    baseURL: url,
    withCredentials: true,
});

const getTasks = async () => {
    try {
        const result = await tasks_api.get("/getTasks");
        console.log(result);

        result.data.tasks.forEach((element) => {
            const newDate = new Date(element.duedate);
            element.duedate = newDate;
        });
        return result.data.tasks;
    } catch (error) {
        console.log(error);
    }
};

export { getTasks };
