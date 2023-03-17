import React from 'react';

export default function FormEntry ({name, labelDutch, value, handleChange}) {
    return (
        <label htmlFor={name}>
            {labelDutch}
            <input
                type="text"
                name={name}
                value={value}
                onChange={handleChange}
            />
        </label>

    )
};