import React, { createContext, useState } from "react";

export const MeetingContext = createContext();

const ContextProvider = ({ children }) => {
    const [numEmployees, setNumEmployees] = useState(5);
    const [meetingDuration, setMeetingDuration] = useState(30);
    const [timesPerWeek, setTimesPerWeek] = useState(1);
    const [averageSalary, setAverageSalary] = useState(30);

    return (
        <MeetingContext.Provider value={{
            numEmployees,
            setNumEmployees,
            meetingDuration,
            setMeetingDuration,
            timesPerWeek,
            setTimesPerWeek,
            averageSalary,
            setAverageSalary
        }}>
            {children}
        </MeetingContext.Provider>
    )

}

export default ContextProvider;
