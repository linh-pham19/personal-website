import React from 'react'

interface FormRadioButtonProps {
    label: string;
    name: string;
    options: { label: string; value: string }[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

function FormRadioButton({ label, name, options, value, onChange, error }: FormRadioButtonProps) {
    return (
        <div className="form-radio-button">
            <label className="form-label">{label}:</label>

            {options.map((option) => (
                <label key={option.value} className="radio-label" style={{ marginLeft: '1rem', display: 'inline-flex', alignItems: 'center', color: 'black' }}>
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={value === option.value}
                        onChange={onChange}
                    />
                    {option.label}
                </label>
            ))}
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}

        </div>
    )
}

export default FormRadioButton
