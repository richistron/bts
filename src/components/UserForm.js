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
        name={'nombre'}
        placeholder={'Nombre'}
        type={'text'}
        value={props.user.get('nombre')}
      />

      <FormInput
        label={'Apellido Paterno'}
        name={'appellido_paterno'}
        placeholder={'Appellido Paterno'}
        type={'text'}
        value={props.user.get('appellido_paterno')}
      />

      <FormInput
        label={'appellido_materno'}
        name={'appellido_materno'}
        placeholder={'appellido_materno'}
        type={'text'}
        value={props.user.get('appellido_materno')}
      />

      <FormInput
        label={'fecha_de_nacimiento'}
        name={'fecha_de_nacimiento'}
        placeholder={'fecha_de_nacimiento'}
        type={'text'}
        value={props.user.get('fecha_de_nacimiento')}
      />

      <FormInput
        label={'ciudad_de_nacimiento'}
        name={'ciudad_de_nacimiento'}
        placeholder={'ciudad_de_nacimiento'}
        type={'text'}
        value={props.user.get('ciudad_de_nacimiento')}
      />

      <FormInput
        label={'estado_de_nacimiento'}
        name={'estado_de_nacimiento'}
        placeholder={'estado_de_nacimiento'}
        type={'text'}
        value={props.user.get('estado_de_nacimiento')}
      />

      <FormInput
        label={'sexo'}
        name={'sexo'}
        placeholder={'sexo'}
        type={'text'}
        value={props.user.get('sexo')}
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