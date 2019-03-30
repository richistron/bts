import React from 'react';
import propTypes from 'prop-types';

const FormInput = props => (
  <div className='form-group'>

    {props.label &&
    <label>{props.label}</label>
    }

    <input
      className='form-control'
      name={props.name}
      onChange={val => console.log(val)}
      placeholder={props.placeholder}
      type={props.type || 'text'}
      value={props.value}
    />

  </div>
);

FormInput.propTypes = {
  placeholder: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  label: propTypes.string,
  name: propTypes.string.isRequired,
};

export default FormInput;