import React from "react";
import { formatDollars } from "./utils";

const ResultsCard = ({ label, dollarCost }) => {
    return (
        <div className="results-card">
            <h2 className="dollar-amount width-100 mb0">
                {formatDollars(dollarCost)}
            </h2>
            <p className="width-100 mt0">{label}</p>
        </div>
    );
};

export default ResultsCard;
