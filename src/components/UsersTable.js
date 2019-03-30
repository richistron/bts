import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

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
                    <Link to={'/users/' + user.get('id') + '/view'}>Ver</Link>
                    {' | '}
                    <Link to={'/users/' + user.get('id') + '/edit'}>Editar</Link>
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