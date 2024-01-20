import React, { useContext } from "react";
import PlusMinusInput from "./PlusMinusInput";
import { MeetingContext } from "./meetingContext";

const ConfigurationPanel = (props) => {
    const dataPoints = useContext(MeetingContext);

    return (
        <div className={`border-solid configuration-panel ${props.className}`}>
            {/* <h2 className="text-center">ConfigurationPanel</h2> */}
            <div className="plus-minus-container text-center">
                {Object.values(dataPoints).map(data => (
                    <PlusMinusInput
                        label={data.label}
                        name={data.name}
                        setter={data.setter}
                        step={data.step}
                        value={data.value}
                        key={data.label}
                    />
                ))}
            </div>
        </div>
    );
}

export default ConfigurationPanel;
