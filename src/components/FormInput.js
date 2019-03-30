import React from 'react';
import propTypes from 'prop-types';
import Context from '../Context';

const FormInput = props => {
  const {state, dispatch} = React.useContext(Context);
  return (
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
        value={props.value || ''}
      />

    </div>
  );
};

FormInput.propTypes = {
  placeholder: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  label: propTypes.string,
  name: propTypes.string.isRequired,
};

export default FormInput;