import React from "react";
import { useContext, useEffect } from "react";
import { MeetingContext } from "./meetingContext";
import TestComponent from "./testComponent";

// Cost per meeting
// per week
// per year
// $ per person?
const ResultsPanel = (props) => {
    const meetingContext = useContext(MeetingContext);

    useEffect(() => {
        console.log("results panel useeffect: ");
    }, [meetingContext.numEmployees])

    return (
        <div className={`results-panel ${props.className}`}>
            <h2 className="text-center">Results Panel</h2>
            {JSON.stringify(meetingContext)}
            <TestComponent value={meetingContext.numEmployees} />
        </div>
    );
};

export default ResultsPanel;
