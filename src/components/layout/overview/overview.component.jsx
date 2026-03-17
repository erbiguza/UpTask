import "./overview.styles.scss";

import OverviewCard from "./overview.card.component";

function Overview({ completedCount, pendingCount, overdueCount }) {
    return (
        <>
            <div className="overview">
                <OverviewCard type="completed" quantity={completedCount} />
                <OverviewCard type="pending" quantity={pendingCount} />
                <OverviewCard type="overdue" quantity={overdueCount} />
            </div>
        </>
    );
}

export default Overview;
