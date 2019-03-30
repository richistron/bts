import React from 'react';
import propTypes from 'prop-types';
import FormInput from './FormInput';

const UserForm = props => (
  <form>
    <fieldset
      disabled={props.disabled}
    >
      <FormInput
        label={'Nombre'}
        placeholder={'Nombre'}
        type={'text'}
        value={props.user.get('nombre')}
      />
    </fieldset>
  </form>
);

UserForm.propTypes = {
  user: propTypes.object.isRequired,
  disabled: propTypes.bool.isRequired,
  action: propTypes.oneOf(['view']),
};

export default UserForm;