import React from 'react';
import propTypes from 'prop-types';
import Anchor from './Anchor';

const UsersTable = props => {
  return (
    <div className={'col-md-10'}>
      <div className={'row'}>
        <table className={'table'}>
          <thead>
            <tr>
              <th>Apellidos</th>
              <th>Nombre</th>
              <th>Sexo</th>
              <th>Nacimiento</th>
              <th>{' '}</th>
            </tr>
          </thead>
          <tbody>
            {props.users.toList().map(user => {
              return (
                <tr key={user.get('id')}>
                  <td>{`${user.get('apellido_paterno')} ${user.get('apellido_materno')}`}</td>
                  <td>{user.get('nombre')}</td>
                  <td>{user.get('sexo')}</td>
                  <td>{`${user.get('ciudad_de_nacimiento')}, ${user.get('estado_de_nacimiento')}. ${user.get('fecha_de_nacimiento')}`}</td>
                  <td>
                    <Anchor action={'view'} id={user.get('id')} resource={'users'} text={'Ver'}/>
                    {' | '}
                    <Anchor action={'edit'} id={user.get('id')} resource={'users'} text={'Editar'}/>
                  </td>
                </tr>
              );
            }).toArray()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

UsersTable.propTypes = {
  users: propTypes.object.isRequired,
};

export default UsersTable;