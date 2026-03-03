import { useSelector } from "react-redux";

export const userSelector = () => {
    return useSelector((state) => state.user.user);
};
