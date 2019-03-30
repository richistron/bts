import React from 'react';
import propTypes from 'prop-types';
import FormInput from './FormInput';

const UserForm = props => (
  <form>
    <div className={'jumbotron'}>
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
          name={'apellido_paterno'}
          placeholder={'Appellido Paterno'}
          type={'text'}
          value={props.user.get('apellido_paterno')}
        />

        <FormInput
          label={'Apellido Materno'}
          name={'apellido_materno'}
          placeholder={'Apellido Materno'}
          type={'text'}
          value={props.user.get('apellido_materno')}
        />

        <FormInput
          label={'Fecha de Nacimiento'}
          name={'fecha_de_nacimiento'}
          placeholder={'Fecha de Nacimiento'}
          type={'text'}
          value={props.user.get('fecha_de_nacimiento')}
        />

        <FormInput
          label={'Ciudad de Nacimiento'}
          name={'ciudad_de_nacimiento'}
          placeholder={'Ciudad de Nacimiento'}
          type={'text'}
          value={props.user.get('ciudad_de_nacimiento')}
        />

        <FormInput
          label={'Estado de Nacimiento'}
          name={'estado_de_nacimiento'}
          placeholder={'Estado de Nacimiento'}
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

      {props.action === 'view' &&
      <div className={'actions'}>
        <div className='col-lg' role='group'>
          <button type='button' className='btn btn-info'>Editar</button>
          <button type='button' className='btn btn-danger'>Eliminar</button>
        </div>
      </div>
      }

      {props.action === 'edit' &&
      <div className={'actions'}>
        <div className='col-lg' role='group'>
          <button type='button' className='btn btn-success'>Guardar</button>
          <button type='button' className='btn btn-danger'>Eliminar</button>
          <button type='button' className='btn btn-secondary'>Cancelar</button>
        </div>
      </div>
      }

    </div>
  </form>
);

UserForm.propTypes = {
  user: propTypes.object.isRequired,
  disabled: propTypes.bool.isRequired,
  action: propTypes.oneOf(['view', 'edit']),
};

export default UserForm;