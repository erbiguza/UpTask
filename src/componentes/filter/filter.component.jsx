import "./filter.styles.scss";

import { useState } from "react";

import FilterOption from "./filter.option";

function Filter() {
    const [active, setActive] = useState("All");
    return (
        <div className="filter-container">
            <FilterOption
                option={"Completed"}
                isActive={active === "Completed"}
                onClick={() => {
                    setActive("Completed");
                }}
            />
            <FilterOption
                option={"Pending"}
                isActive={active === "Pending"}
                onClick={() => {
                    setActive("Pending");
                }}
            />
            <FilterOption
                option={"Overdue"}
                isActive={active === "Overdue"}
                onClick={() => {
                    setActive("Overdue");
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
