import "./settings-nav.styles.scss";

import { useState } from "react";

import SettingsOption from "./settings-option.component";

function SettingsNav({ isActive, setActive }) {
    return (
        <>
            <div className="settings-nav">
                <div className="options-container">
                    <SettingsOption
                        content={"Profile"}
                        isActive={isActive}
                        setActive={setActive}
                    />
                    <SettingsOption
                        content={"Security"}
                        isActive={isActive}
                        setActive={setActive}
                    />
                    <SettingsOption
                        content={"Appearance"}
                        isActive={isActive}
                        setActive={setActive}
                    />
                </div>
            </div>
        </>
    );
}

export default SettingsNav;
