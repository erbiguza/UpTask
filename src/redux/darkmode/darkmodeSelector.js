import { useSelector } from "react-redux";

export const darkmodeSelector = () => {
    return useSelector((state) => state.darkmode.darkmode);
};
