import React from "react";

const nonNumberMatcher = new RegExp(/\D/);

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
        const newValue = e.target.value;
        if(nonNumberMatcher.test(newValue)) {
            return;
        }
        
        setter(newValue);
    }

    return (
        <div className="plus-minus-input">
            <label
                className="plus-minus-label"
                htmlFor={label}
            >{label}</label>
            <div className="input-wrapper">
                <button
                    type="button"
                    onClick={onDecrement}
                    className="minus"
                >-</button>
                <input
                    name={label}
                    type="tel"
                    pattern="[0-9]*"
                    min="1"
                    value={value}
                    onChange={onChange}
                />
                <button
                    type="button"
                    onClick={() => setter(value + step)}
                >+</button>
            </div>
        </div>
    );
};

export default PlusMinusInput;
