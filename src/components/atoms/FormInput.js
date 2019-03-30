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
    <div className={`form-group ${props.type === 'radio' ? 'form-check' : ''}`}>

      {( props.type !== 'radio' && props.label ) &&
      <label>{props.label}</label>
      }

      {(props.type === 'text' || props.type === 'radio') &&
      <input
        className={`${props.type === 'radio' ? 'form-check-input' : 'form-control'} ${props.error ? 'is-invalid' : ''}`}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type || 'text'}
        value={props.type === 'radio' ? props.defaultValue : state.value}
        checked={props.type === 'radio' && state.checked}
        onChange={({target}) => {
          setState({checked: true});
          dispatch({type: 'FORM_CHANGE', value: props.type === 'radio' ? props.defaultValue : target.value, field: props.name});
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


      {( props.type === 'radio' && props.label ) &&
      <label className={'form-check-label'}>{props.label}</label>
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