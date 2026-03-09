import "./info-card.styles.scss";

function InfoCard({ infoType, info }) {
    return (
        <div className="card-container">
            <div className="info-type">
                <h3>{infoType}:</h3>
            </div>
            <div className="info">
                <h3>{info}</h3>
            </div>
        </div>
    );
}

export default InfoCard;
