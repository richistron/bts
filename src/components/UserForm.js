import React from 'react';
import propTypes from 'prop-types';
import FormInput from './FormInput';
import Anchor from './Anchor';

const UserForm = props => (
  <form name={'users'}>
    <div className={'jumbotron'}>
      <fieldset
        disabled={props.disabled}
      >
        <FormInput
          label={'Nombre'}
          name={'nombre'}
          placeholder={'Nombre'}
          type={'text'}
          value={props.user.nombre}
          onChange={({target}) => console.log(target.value)}
        />

        {/*<FormInput*/}
          {/*label={'Apellido Paterno'}*/}
          {/*name={'apellido_paterno'}*/}
          {/*placeholder={'Appellido Paterno'}*/}
          {/*type={'text'}*/}
          {/*value={props.user.apellido_paterno}*/}
        {/*/>*/}

        {/*<FormInput*/}
          {/*label={'Apellido Materno'}*/}
          {/*name={'apellido_materno'}*/}
          {/*placeholder={'Apellido Materno'}*/}
          {/*type={'text'}*/}
          {/*value={props.user.apellido_materno}*/}
        {/*/>*/}

        {/*<FormInput*/}
          {/*label={'Fecha de Nacimiento'}*/}
          {/*name={'fecha_de_nacimiento'}*/}
          {/*placeholder={'Fecha de Nacimiento'}*/}
          {/*type={'text'}*/}
          {/*value={props.user.fecha_de_nacimiento}*/}
        {/*/>*/}

        {/*<FormInput*/}
          {/*label={'Ciudad de Nacimiento'}*/}
          {/*name={'ciudad_de_nacimiento'}*/}
          {/*placeholder={'Ciudad de Nacimiento'}*/}
          {/*type={'text'}*/}
          {/*value={props.user.ciudad_de_nacimiento}*/}
        {/*/>*/}

        {/*<FormInput*/}
          {/*label={'Estado de Nacimiento'}*/}
          {/*name={'estado_de_nacimiento'}*/}
          {/*placeholder={'Estado de Nacimiento'}*/}
          {/*type={'text'}*/}
          {/*value={props.user.estado_de_nacimiento}*/}
        {/*/>*/}

        {/*<FormInput*/}
          {/*label={'sexo'}*/}
          {/*name={'sexo'}*/}
          {/*placeholder={'sexo'}*/}
          {/*type={'text'}*/}
          {/*value={props.user.sexo}*/}
        {/*/>*/}
      </fieldset>

      {props.action === 'view' &&
      <div className={'actions'}>
        <div className='col-lg' role='group'>
          <Anchor className={'btn btn-info'} action={'edit'} id={props.user.id} resource={'users'} text={'Editar'}/>
        </div>
      </div>
      }

      {props.action === 'edit' &&
      <div className={'actions'}>
        <div className='col-lg' role='group'>
          {/*<button type='button' className='btn btn-success'>Guardar</button>*/}
          {/*<button type='button' className='btn btn-danger'>Eliminar</button>*/}
          {/*<button type='button' className='btn btn-secondary'>Cancelar</button>*/}
          <Anchor className={'btn btn-secondary'} action={'view'} id={props.user.id} resource={'users'} text={'Cancelar'}/>
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