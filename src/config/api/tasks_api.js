import axios from "axios";

const url = import.meta.env.VITE_TASKS_API;

export const tasks_api = axios.create({
    baseURL: url,
    withCredentials: true,
});

const getTasks = async () => {
    try {
        const result = await tasks_api.get("/getTasks");

        result.data.tasks.forEach((element) => {
            const newDate = new Date(element.duedate)
                .toISOString()
                .split("T")[0];
            element.duedate = newDate;
        });
        return result.data.tasks;
    } catch (error) {
        console.log(error);
    }
};

const finishTask = async (id) => {
    try {
        await tasks_api.patch(`/finishTask/${id}`);
    } catch (error) {
        console.log(error);
    }
};

export { getTasks, finishTask };
