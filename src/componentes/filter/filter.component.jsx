import "./filter.styles.scss";

import { useEffect, useState } from "react";

import FilterOption from "./filter.option";

function Filter({ setFilteredTasks, tasks }) {
    const [active, setActive] = useState("All");

    return (
        <div className="filter-container">
            <FilterOption
                option={"Low"}
                isActive={active === "Low"}
                onClick={() => {
                    setActive("Low");
                    setFilteredTasks(
                        tasks.filter((task) => task.priority === "low"),
                    );
                }}
            />
            <FilterOption
                option={"Medium"}
                isActive={active === "Medium"}
                onClick={() => {
                    setActive("Medium");
                    setFilteredTasks(
                        tasks.filter((task) => task.priority === "medium"),
                    );
                }}
            />
            <FilterOption
                option={"High"}
                isActive={active === "High"}
                onClick={() => {
                    setActive("High");
                    setFilteredTasks(
                        tasks.filter((task) => task.priority === "high"),
                    );
                }}
            />
            <FilterOption
                option={"All"}
                isActive={active === "All"}
                onClick={() => {
                    setActive("All");
                    setFilteredTasks(tasks);
                }}
            />
        </div>
    );
}

export default Filter;
