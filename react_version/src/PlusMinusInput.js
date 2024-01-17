import React from "react";

const PlusMinusInput = ({
    label,
    name, // now unused, can probably remove
    setter,
    step,
    value,
}) => {
    const onDecrement = () => {
        const newValue = value - step;
        if (newValue < 0) {
            setter(0);
            return;
        }

        setter(newValue);
    }
    const onChange = (e) => {
        setter(e.target.value);
    }

    return (
        <div className="plus-minus-input">
            <label
                className="plus-minus-label"
                htmlFor={label}
            >{label}</label>
            <button
                type="button"
                onClick={onDecrement}
            >-</button>
            <input
                name={label}
                type="number"
                min="1"
                className="color-black"
                value={value}
                onChange={onChange}
            />
            <button
                type="button"
                onClick={() => setter(value + step)}
            >+</button>
        </div>
    );
};

export default PlusMinusInput;
