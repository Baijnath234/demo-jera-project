import React from 'react';
import './checkbox.css';
interface CheckBoxProps {
    label: string;
    checked: boolean;
    
    onChange: (checked: boolean) => void;
}
export const CheckBox: React.FC<CheckBoxProps> = ({ label, checked, onChange }) => {
    return (
        <div className="checkbox-container">
            <label>
                <input data-testid="input-checkbox" type="checkbox"
                    checked={checked}
                    onChange={(event) => onChange(event.target.checked)}
                />
                {label}
            </label>
        </div>);
};
