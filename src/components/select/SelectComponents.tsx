import Select from './Select';
import React from 'react';

function SelectComponents() {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  return (
    <div className="p-50">
      <div className="uk-overflow-auto">
        <h5>Select</h5>

        <Select
          label='Test select'
          options={options}
        />

        <p className="mt-20">With multi select</p>

        <Select
          label='Select'
          isMulti={true}
          options={options}
        />

        <p className="mt-20">With mandatory (asterisk)</p>

        <Select
          label='Select'
          isMandatory={true}
          options={options}
        />

        <p className="mt-20">With Placeholder</p>

        <Select
          label='Select'
          placeholder={'Test Select Placeholder'}
          options={options}
        />

        <p className="mt-20">Disabled</p>

        <Select
          label='Select'
          disabled={true}
        />

      </div>
    </div>
  );
}

export default SelectComponents;