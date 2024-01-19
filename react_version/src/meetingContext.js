import React, { createContext, useState } from "react";

export const MeetingContext = createContext();

const ContextProvider = ({ children }) => {
    const [numEmployees, setNumEmployees] = useState(5);
    const [meetingDuration, setMeetingDuration] = useState(30);
    const [timesPerWeek, setTimesPerWeek] = useState(1);
    const [averageSalary, setAverageSalary] = useState(100000);

    return (
        <MeetingContext.Provider value={{
            numEmployees: {
                name: "numEmployees",
                label: "Number of employees",
                value: numEmployees,
                setter: setNumEmployees,
                step: 1,
            },
            meetingDuration: {
                name: "meetingDuration",
                label: "Meeting duration (minutes)",
                value: meetingDuration,
                setter: setMeetingDuration,
                step: 5,
            },
            timesPerWeek: {
                name: "timesPerWeek",
                label: "Times per week",
                value: timesPerWeek,
                setter: setTimesPerWeek,
                step: .5,
            },
            averageSalary: {
                name: "averageSalary",
                label: "Average salary",
                value: averageSalary,
                setter: setAverageSalary,
                step: 25000,
            }
        }}>
            {children}
        </MeetingContext.Provider>
    )

}

export default ContextProvider;
