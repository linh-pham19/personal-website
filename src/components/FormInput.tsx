import React from 'react'

interface FormInputProps {
  label: string;
  type: 'text' | 'email' | 'textarea';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
}
function FormInput({ label, type, name, value, onChange, error }: FormInputProps) {
  return (
    <label className="form-label">
      {label}:
      {type === 'textarea' ? (
        <textarea
          name={name}
          className="form-textarea"
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          name={name}
          className="form-input"
          value={value}
          onChange={onChange}
        />
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </label>
  );
}

export default FormInput;
