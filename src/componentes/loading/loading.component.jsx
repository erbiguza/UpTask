import "./loading.styles.scss";

import { ClipLoader } from "react-spinners";
import { loadingSelector } from "../../redux/loading/loadingSelector.js";

function Loading() {
    const loading = loadingSelector();
    return (
        <div className="loading-container">
            <ClipLoader
                color={"#32466d"}
                loading={loading}
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Loading;
