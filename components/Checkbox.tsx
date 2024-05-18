import React from 'react';
import { useController } from 'react-hook-form';

const IsShowingCheckBox = ({ control, name, label }) => {
    const { field: { onChange, onBlur, value, ref } } = useController({
        control,
        name,
        defaultValue: true,
    });

    const handleChange = (event) => {
        onChange(event.target.checked);
    };

    return (
        <div className="checkbox-container">
            <input
                type="checkbox"
                name={name}
                id={name}
                checked={value}
                onChange={handleChange}
                onBlur={onBlur}
                ref={ref}
            />
            <label htmlFor={name}>{label}</label>
        </div>
    );
};

export default IsShowingCheckBox;
