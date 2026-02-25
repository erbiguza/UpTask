import "./specialbox.styles.scss";

import { useState, useEffect } from "react";

function SpecialBox({ boxname, button, width, children, onclick }) {
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(max-width: 768px)");
        setMobile(media.matches);

        const listener = (e) => setMobile(e.matches);
        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, []);

    return (
        <div className="container" style={{ width: isMobile ? "100%" : width }}>
            <h3>{boxname}</h3>
            <div className="elements-container">{children}</div>
            <div className="button-container">
                <button onClick={onclick}>{button}</button>
            </div>
        </div>
    );
}

export default SpecialBox;
