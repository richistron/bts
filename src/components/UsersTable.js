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
            {Object.values(props.users).map(user => {
              return (
                <tr key={user.id}>
                  <td>{`${user.apellido_paterno} ${user.apellido_materno}`}</td>
                  <td>{user.nombre}</td>
                  <td>{user.sexo}</td>
                  <td>{`${user.ciudad_de_nacimiento}, ${user.estado_de_nacimiento}. ${user.fecha_de_nacimiento}`}</td>
                  <td>
                    <Anchor action={'view'} id={user.id} resource={'users'} text={'Ver'}/>
                    {' | '}
                    <Anchor action={'edit'} id={user.id} resource={'users'} text={'Editar'}/>
                  </td>
                </tr>
              );
            })}
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