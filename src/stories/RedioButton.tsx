import React, { useState } from 'react';

export interface RadioProps {
  click(click: any): unknown;
  label: string;
  
  value: string;
  checked?: boolean;
  onChange: (value: string) => void;
}

export const Radio: React.FC<RadioProps> = ({ label, value, checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setIsChecked(true);
    
    onChange(value);
  };

  return (
    <label>
      <input  type="radio" value={value} checked={isChecked} onChange={handleRadioChange} />
      {label}
    </label>
  );
};
