import React from 'react';
import propTypes from 'prop-types';
import Anchor from '../atoms/Anchor';
import yearsOld from '../../lib/yearsOld';

const UserList = props => {
  return (
    <div className={'col-md-10'}>
      <div className={'row'}>
        <table className={'table'}>
          <thead>
            <tr>
              <th>Apellidos</th>
              <th>Nombre</th>
              <th>Nacimiento</th>
              <th>Edad</th>
              <th>Sexo</th>
              <th>{' '}</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(props.users).map(user => {
              return (
                <tr key={user.id}>
                  <td>{`
                      ${user.apellido_paterno}
                      ${user.apellido_materno}
                  `}</td>
                  <td>{user.nombre}</td>
                  <td>
                    {`
                      ${user.ciudad_de_nacimiento},
                      ${user.estado_de_nacimiento}.
                    `}
                  </td>
                  <td>{yearsOld(user.fecha_de_nacimiento)} {'años'}</td>
                  <td>{user.sexo}</td>
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

UserList.propTypes = {
  users: propTypes.object.isRequired,
};

export default UserList;