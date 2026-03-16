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
                        tasks.filter(
                            (task) =>
                                task.priority === "Low" &&
                                task.finished === false,
                        ),
                    );
                }}
            />
            <FilterOption
                option={"Medium"}
                isActive={active === "Medium"}
                onClick={() => {
                    setActive("Medium");
                    setFilteredTasks(
                        tasks.filter(
                            (task) =>
                                task.priority === "Medium" &&
                                task.finished === false,
                        ),
                    );
                }}
            />
            <FilterOption
                option={"High"}
                isActive={active === "High"}
                onClick={() => {
                    setActive("High");
                    setFilteredTasks(
                        tasks.filter(
                            (task) =>
                                task.priority === "High" &&
                                task.finished === false,
                        ),
                    );
                }}
            />
            <FilterOption
                option={"All"}
                isActive={active === "All"}
                onClick={() => {
                    setActive("All");
                    setFilteredTasks(
                        tasks.filter((task) => task.finished === false),
                    );
                }}
            />
        </div>
    );
}

export default Filter;
