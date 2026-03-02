import "./loading.styles.scss";

import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";

function Loading() {
    const loading = useSelector((state) => state.loading.loading);
    return (
        <div className="loading-container">
            <ClipLoader
                color={"32466d"}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Loading;
