import React, { useContext, useState } from "react";
import { MeetingContext } from "./meetingContext";

const PlusMinusInput = ({
    value,
    onIncrement,
    onDecrement, // maybe just tie into context?
    onChange,
    step,
    label,
    name,
}) => {
    const meetingContext = useContext(MeetingContext);
    console.log("Meeting context;", meetingContext);
    return (
        <div className="plus-minus-input">
            <label
                className="plus-minus-label"
                htmlFor={label}
            >{label}</label>
            <button type="button" onClick={() => onDecrement(value, step)}>-</button>
            <input
                name={label}
                type="number"
                min="1"
                className="color-black"
                value={value}
                onChange={onChange}
            />
            {/* <button type="button" onClick={() => onIncrement(value, step)}>+</button> */}
            <button type="button" onClick={() => meetingContext.setNumEmployees(100)}>+</button>
        </div>
    );
};

export default PlusMinusInput;
