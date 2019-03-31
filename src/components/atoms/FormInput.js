import React from 'react';
import propTypes from 'prop-types';
import Context from '../../Context';

const FormInput = props => {
  const {dispatch} = React.useContext(Context);
  const [state, setState] = React.useState({value: props.defaultValue});

  React.useEffect(() => {
    dispatch({type: 'FORM_CHANGE', value: props.defaultValue, field: props.name});
  }, []);

  return (
    <div className='form-group'>

      {props.label &&
      <label>{props.label}</label>
      }

      <input
        className={`form-control ${props.error ? 'is-invalid' : ''}`}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type || 'text'}
        value={state.value}
        onChange={({target}) => {
          dispatch({type: 'FORM_CHANGE', value: target.value, field: props.name});
          setState({value: target.value});
        }}
      />

    </div>
  );
};

FormInput.propTypes = {
  defaultValue: propTypes.string,
  label: propTypes.string,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  type: propTypes.string,
  error: propTypes.bool,
};

export default FormInput;