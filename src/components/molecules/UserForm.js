import React from 'react';
import propTypes from 'prop-types';
import FormInput from '../atoms/FormInput';
import Anchor from '../atoms/Anchor';
import Context from '../../Context';
import isObjectEqual from '../../lib/isObjectEqual';
import isEmpty from '../../lib/isEmpty';
import ESTADOS_DE_MEXICO from '../../lib/ESTADOS_DE_MEXICO';

const UserForm = props => {
  const {state: globlaState, dispatch} = React.useContext(Context);
  const [state, setState] = React.useState({showMessage: false});

  const isValidForm = () => {
    for (let key in globlaState.forms) {
      if (isEmpty(globlaState.forms[key])) {
        return false;
      }
    }
    return true;
  };

  const isPristine = () => {
    return isObjectEqual({...globlaState.forms, id: props.user.id}, props.user);
  };

  const saveForm = event => {
    event.preventDefault();
    if (!isObjectEqual(globlaState.forms, props.user)) {
      dispatch({type: 'UPDATE_USER', user: {...globlaState.forms, id: props.user.id}});
      setState({showMessage: true});
      setTimeout(() => setState({showMessage: false}), 5000);
    }
  };

  return (

    <form name={'users'} onSubmit={saveForm}>
      {state.showMessage &&
      <div className='alert alert-success' role='alert'>
        Los cambios fueron guardados
      </div>
      }


      <div className={'jumbotron'}>
        <fieldset
          disabled={props.disabled}
        >
          <FormInput
            label={'Nombre'}
            name={'nombre'}
            placeholder={'Nombre'}
            type={'text'}
            error={isEmpty(globlaState.forms.nombre)}
            defaultValue={props.user.nombre || ''}
          />

          <FormInput
            label={'Apellido Paterno'}
            name={'apellido_paterno'}
            placeholder={'Appellido Paterno'}
            type={'text'}
            error={isEmpty(globlaState.forms.apellido_paterno)}
            defaultValue={props.user.apellido_paterno || ''}
          />

          <FormInput
            label={'Apellido Materno'}
            name={'apellido_materno'}
            placeholder={'Apellido Materno'}
            type={'text'}
            error={isEmpty(globlaState.forms.apellido_materno)}
            defaultValue={props.user.apellido_materno || ''}
          />

          <FormInput
            label={'Fecha de Nacimiento'}
            name={'fecha_de_nacimiento'}
            placeholder={'AAAA/MM/DD'}
            type={'text'}
            error={isEmpty(globlaState.forms.fecha_de_nacimiento) || (globlaState.fecha_de_nacimiento && !globlaState.fecha_de_nacimiento.match(/\d\d\d\d\/\d\d?\/\d\d?/))}
            defaultValue={props.user.fecha_de_nacimiento || ''}
          />

          <FormInput
            label={'Estado de Nacimiento'}
            name={'estado_de_nacimiento'}
            placeholder={'Estado de Nacimiento'}
            type={'select'}
            options={ESTADOS_DE_MEXICO.map(estado => ({value: estado, text: estado}))}
            error={isEmpty(globlaState.forms.estado_de_nacimiento)}
            defaultValue={props.user.estado_de_nacimiento || ''}
          />

          <FormInput
            label={'Ciudad de Nacimiento'}
            name={'ciudad_de_nacimiento'}
            placeholder={'Ciudad de Nacimiento'}
            type={'text'}
            error={isEmpty(globlaState.forms.ciudad_de_nacimiento)}
            defaultValue={props.user.ciudad_de_nacimiento || ''}
          />


          <FormInput
            label={'Sexo'}
            name={'sexo'}
            placeholder={'sexo'}
            type={'radio'}
            options={['Femenino', 'Masculino']}
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
