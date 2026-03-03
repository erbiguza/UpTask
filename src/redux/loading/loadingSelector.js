import { useSelector } from "react-redux";

export const loadingSelector = () => {
    return useSelector((state) => state.loading.loading);
};
