import React from 'react';
import propTypes from 'prop-types';
import Context from '../../Context';

// TODO, refactor this component to be a higher order component
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

      {props.type === 'text' &&
      <input
        className={`form-control ${props.error ? 'is-invalid' : ''}`}
        name={props.name}
        placeholder={props.placeholder}
        type={'text'}
        value={state.value}
        onChange={({target}) => {
          dispatch({type: 'FORM_CHANGE', value: target.value, field: props.name});
          setState({value: target.value});
        }}
      />
      }


      {props.type === 'select' &&
      <select
        className={`form-control ${props.error ? 'is-invalid' : ''}`}
        name={props.name}
        placeholder={props.placeholder}
        type={'select'}
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

      {props.type === 'radio' &&
      <div>
        {props.options.map(option => {
          return (
            <div key={option.value} className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name={props.name}
                value={option.value}
                checked={state.value === option.value}
                onChange={({target}) => {
                  setState({value: target.value});
                  dispatch({type: 'FORM_CHANGE', value: target.value, field: props.name});
                }}
              />
              <label className='form-check-label'>
                {option.text}
              </label>
            </div>
          );
        })}
      </div>
      }
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
  options: propTypes.arrayOf(propTypes.shape({
    value: propTypes.any,
    text: propTypes.string,
  })),
};

export default FormInput;