import React from "react";
import { useContext } from "react";
import { MeetingContext } from "./meetingContext";
import ResultsCard from "./ResultsCard";

// assumes 40 hrs per week * 52 weeks per year
const HOURS_PER_YEAR = 2080;

const ResultsPanel = (props) => {
    const meetingContext = useContext(MeetingContext);
    const {
        numEmployees,
        meetingDuration,
        timesPerWeek,
        averageSalary,
    } = meetingContext;

    const costPerHour = () => {
        const hourlyRate = averageSalary.value / HOURS_PER_YEAR;
        const totalHourly = hourlyRate * numEmployees.value;
        return totalHourly;
    }

    const costPerMinute = (costPerHour() / 60);
    const costPerMeeting = (costPerMinute * meetingDuration.value).toFixed(2);
    const costPerWeek = (costPerMeeting * timesPerWeek.value).toFixed(2);
    const costPerYear = (costPerWeek * 52).toFixed(2)

    return (
        <div className={`results-panel ${props.className}`}>
            <div className="flex">
                <div className="results-card-container">
                    <ResultsCard
                        label="per meeting"
                        dollarCost={costPerMeeting}
                    />
                </div>
                <div className="results-card-container">
                    <ResultsCard
                        label="per minute"
                        dollarCost={costPerMinute}
                    />
                </div>
                <div className="results-card-container">
                    <ResultsCard
                        label="per year"
                        dollarCost={costPerYear}
                    />
                </div>
            </div>
        </div>
    );
};

export default ResultsPanel;
