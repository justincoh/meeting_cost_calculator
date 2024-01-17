import React from "react";
import PlusMinusInput from "./PlusMinusInput";

const ConfigurationPanel = (props) => {
    // const onDecrement = (value, step) => {
    //     console.log("Decremetn", value, step);
    // }
    // const onIncrement = (value, step) => {
    //     console.log("Increment", value, step);
    // }
    // const onChange = (e) => {
    //     console.log("Change", e.target.value);
    // }

    // const eventHandlers = { onIncrement, onDecrement, onChange }

    return (
        <div className={`border-solid configuration-panel ${props.className}`}>
            <h2 className="text-center">ConfigurationPanel</h2>
            <div className="plus-minus-container text-center">
                <PlusMinusInput
                    label="Number of employees"
                    step={1}
                    value={1}
                    name="numEmployees"
                    // {...eventHandlers}
                />
                <PlusMinusInput
                    label="Average salary"
                    step={25000}
                    value={100000}
                    name="averageSalary"
                    // {...eventHandlers}
                />
                <PlusMinusInput
                    label="Meeting duration (minutes)"
                    step={5}
                    value={30}
                    name="meetingDuration"
                    // {...eventHandlers}
                />
                <PlusMinusInput
                    label="Times per week"
                    step={1}
                    value={1}
                    name="timesPerWeek"
                    // {...eventHandlers}
                />
            </div>
        </div>
    );
}

export default ConfigurationPanel;
