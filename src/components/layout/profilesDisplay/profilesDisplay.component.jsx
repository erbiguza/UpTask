import "./profilesDisplay.styles.scss";

import ImageDisplay from "./imageDisplay.component";
import { useState, useEffect } from "react";

function ProfilesDisplay({ imageNames, setSelectedPic }) {
    const [selected, setSelected] = useState(imageNames[0]);

    useEffect(() => {
        setSelectedPic(selected);
    }, [selected]);
    return (
        <div className="profiles-display">
            {imageNames.map((image) => (
                <ImageDisplay
                    key={image}
                    image={image}
                    onclick={() => {
                        setSelected(image);
                    }}
                    selected={selected == image ? true : false}
                />
            ))}
        </div>
    );
}

export default ProfilesDisplay;
