import "./overview.styles.scss";

import OverviewCard from "./overview.card.component";

function Overview() {
    return (
        <>
            <div className="overview">
                <OverviewCard type="completed" quantity={5} />
                <OverviewCard type="pending" quantity={6} />
                <OverviewCard type="overdue" quantity={2} />
            </div>
        </>
    );
}

export default Overview;
