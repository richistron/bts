import React from 'react';
import propTypes from 'prop-types';
import Context from '../../Context';

const FormInput = props => {
  const {dispatch} = React.useContext(Context);
  const [state, setState] = React.useState({
    value: props.defaultValue,
    state: false,
  });

  React.useEffect(() => {
    dispatch({type: 'FORM_CHANGE', value: props.defaultValue, field: props.name});
  }, []);

  return (
    <div className={'form-group'}>

      {props.label &&
      <label>{props.label}</label>
      }

      {props.type === 'text' &&
      <input
        className={`form-control ${props.error ? 'is-invalid' : ''}`}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type || 'text'}
        value={state.value}
        checked={state.checked}
        onChange={({target}) => {
          dispatch({type: 'FORM_CHANGE', value: target.value, field: props.name});
        }}
      />
      }

      {props.type === 'select' &&
      <select
        className={`form-control ${props.error ? 'is-invalid' : ''}`}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type || 'text'}
        value={state.value}
        onChange={({target}) => {
          setState({value: target.value});
          dispatch({type: 'FORM_CHANGE', value: target.value, field: props.name});
        }}
      >
        {props.options.map(option => (
          <option key={option.value} value={option.value}>{option.text}</option>
        ))}
      </select>
      }
    </div>
  );
};

FormInput.propTypes = {
  defaultValue: propTypes.string,
  label: propTypes.string,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  type: propTypes.oneOf(['text', 'select', 'radio']),
  error: propTypes.bool,
  options: propTypes.arrayOf(propTypes.shape({
    value: propTypes.any,
    text: propTypes.any,
  })),
};

export default FormInput;