import { useSelector } from "react-redux";

export const taskSelector = () => {
    return useSelector((state) => state.tasks.tasks);
};
