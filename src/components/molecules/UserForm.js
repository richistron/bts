import React from 'react';
import propTypes from 'prop-types';
import FormInput from '../atoms/FormInput';
import Anchor from '../atoms/Anchor';
import Context from '../../Context';
import isObjectEqual from '../../lib/isObjectEqual';
import isEmpty from '../../lib/isEmpty';

const UserForm = props => {
  const {state, dispatch} = React.useContext(Context);

  const isValidForm = () => {
    for (let key in state.forms) {
      if (isEmpty(state.forms[key])) {
        return false;
      }
    }
    return true;
  };

  const isPristine = () => {
    return isObjectEqual({...state.forms, id: props.user.id}, props.user);
  };

  const saveForm = event => {
    event.preventDefault();
    if (!isObjectEqual(state.forms, props.user)) {
      dispatch({type: 'UPDATE_USER', user: {...state.forms, id: props.user.id}});
    }
  };

  return (

    <form name={'users'} onSubmit={saveForm}>
      <div className={'jumbotron'}>
        <fieldset
          disabled={props.disabled}
        >
          <FormInput
            label={'Nombre'}
            name={'nombre'}
            placeholder={'Nombre'}
            type={'text'}
            error={isEmpty(state.forms.nombre)}
            defaultValue={props.user.nombre || ''}
          />

          <FormInput
            label={'Apellido Paterno'}
            name={'apellido_paterno'}
            placeholder={'Appellido Paterno'}
            type={'text'}
            defaultValue={props.user.apellido_paterno || ''}
          />

          <FormInput
            label={'Apellido Materno'}
            name={'apellido_materno'}
            placeholder={'Apellido Materno'}
            type={'text'}
            defaultValue={props.user.apellido_materno || ''}
          />

          <FormInput
            label={'Fecha de Nacimiento'}
            name={'fecha_de_nacimiento'}
            placeholder={'Fecha de Nacimiento'}
            type={'text'}
            defaultValue={props.user.fecha_de_nacimiento || ''}
          />

          <FormInput
            label={'Ciudad de Nacimiento'}
            name={'ciudad_de_nacimiento'}
            placeholder={'Ciudad de Nacimiento'}
            type={'text'}
            defaultValue={props.user.ciudad_de_nacimiento || ''}
          />

          <FormInput
            label={'Estado de Nacimiento'}
            name={'estado_de_nacimiento'}
            placeholder={'Estado de Nacimiento'}
            type={'text'}
            defaultValue={props.user.estado_de_nacimiento || ''}
          />

          <FormInput
            label={'sexo'}
            name={'sexo'}
            placeholder={'sexo'}
            type={'text'}
            defaultValue={props.user.sexo || ''}
          />
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
            <button
              disabled={isPristine() || !isValidForm()}
              type='submit'
              className='btn btn-success'>Guardar</button>

            {/*<button type='button' className='btn btn-danger'>Eliminar</button>*/}
            {/*<button type='button' className='btn btn-secondary'>Cancelar</button>*/}
            <Anchor className={'btn btn-secondary'} action={'view'} id={props.user.id} resource={'users'} text={'Cancelar'}/>
          </div>
        </div>
        }

      </div>
    </form>
  );
};

UserForm.propTypes = {
  user: propTypes.object.isRequired,
  disabled: propTypes.bool.isRequired,
  action: propTypes.oneOf(['view', 'edit']),
};

export default UserForm;
