import React from "react";
import { formatDollars } from "./utils";

const ResultsCard = ({ label, dollarCost }) => {
    return (
        <div className="results-card flex">
            <p>{label}</p>
            <h2>{formatDollars(dollarCost)}</h2>
        </div>
    );
};

export default ResultsCard;
