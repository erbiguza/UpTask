import "./filter.styles.scss";

import { useState } from "react";

import FilterOption from "./filter.option";

function Filter() {
    const [active, setActive] = useState("All");
    return (
        <div className="filter-container">
            <FilterOption
                option={"Low"}
                isActive={active === "Low"}
                onClick={() => {
                    setActive("Low");
                }}
            />
            <FilterOption
                option={"Medium"}
                isActive={active === "Medium"}
                onClick={() => {
                    setActive("Medium");
                }}
            />
            <FilterOption
                option={"High"}
                isActive={active === "High"}
                onClick={() => {
                    setActive("High");
                }}
            />
            <FilterOption
                option={"All"}
                isActive={active === "All"}
                onClick={() => {
                    setActive("All");
                }}
            />
        </div>
    );
}

export default Filter;
