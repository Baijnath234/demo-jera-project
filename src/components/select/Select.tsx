import React, { forwardRef } from 'react';
import ReactSelect from 'react-select';
import './_react-select.scss'

export type SelectProps = {
  onChange?: () => void;
  label?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  options?: Options[];
  isMandatory?: boolean;
  placeholder?: string;
  value?: any;
  isSearchable?: boolean;
  isMulti?: boolean;
  noOptionsMessage?: string;
  defaultMenuIsOpen?: boolean;
};

interface Options {
  label: string;
  value: string;
  isFixed?: boolean;
  isDisabled?: boolean;
  color?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    onChange,
    label,
    className,
    disabled,
    options,
    isMandatory,
    placeholder,
    value,
    isSearchable,
    isMulti,
    noOptionsMessage,
    defaultMenuIsOpen,
  },
  ref: any
) {

  return (
    <div data-testid={"select"} className={`form-control uk-width-1-3@s ${disabled ? 'disabled' : ''}`}>
      {
        label ?
          <label className="uk-custom-label">
            <span>
              { label }
              {
                isMandatory ? <span className="color-red-60">*</span> : null
              }
            </span>
          </label> : null
      }
      <ReactSelect
        ref={ref}
        className={'form_select_input'}
        classNamePrefix="form_select_input"
        options={options}
        value={value}
        onChange={onChange}
        defaultMenuIsOpen={defaultMenuIsOpen}
        isDisabled={disabled}
        placeholder={placeholder}
        isSearchable={isSearchable}
        isMulti={isMulti}
        noOptionsMessage={() => noOptionsMessage}
      />
    </div>
  );
});

export default Select;