import React from 'react';
import Context from '../Context';
import {Link} from 'react-router-dom';
import {fromJS} from 'immutable';

const UserListPage = () => {

  const {state} = React.useContext(Context);

  const users = state.get('users') || fromJS({});

  const fullName = user => `${ user.get('nombre') } ${ user.get('apellido_paterno') } ${ user.get('apellido_materno') }`;

  return (
    <ul className='list-group text-center'>
      {users.toList().map( user => {
        return (
          <li key={user.get('id')} className='list-group-item'>
            &#x2B51;
            <Link to={'/users/' + user.get('id')}>
              {fullName(user)}
            </Link>
          </li>
        );
      }).toArray()}
    </ul>
  );
};

export default UserListPage;