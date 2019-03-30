import React from 'react';
import Context from '../Context';
import {Link} from 'react-router-dom';
import {fromJS} from 'immutable';

const UserListPage = () => {

  const {state} = React.useContext(Context);

  const users = state.get('users') || fromJS({});

  return (
    <ul className='list-group text-center'>
      {users.toList().map( user => {
        return (
          <li key={user.get('id')} className='list-group-item'>
            <Link to={'/users/' + user.get('id')}>
              {user.get('nombre')}
            </Link>
          </li>
        );
      }).toArray()}
    </ul>
  );
};

export default UserListPage;