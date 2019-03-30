import React, {useEffect, useContext} from 'react';
import Services from '../lib/Services';
import Context from '../Context';
import {Link} from 'react-router-dom';
import {fromJS} from 'immutable';

const UserListPage = () => {

  const {state, dispatch} = useContext(Context);

  useEffect(() => {
    const options = {method: 'get', resource: 'users'};
    const cb = users => dispatch({type: 'ADD_USERS', users});
    Services(options).then(cb);
  }, []);

  const users = state.get('users') || fromJS({});
  return (
    <ul className='list-group text-center'>
      {users.toList().map( user => {
        return (
          <li key={user.get('id')} className='list-group-item'>
            <Link to={'/users/1'}>
              User 1
            </Link>
          </li>
        );
      }).toArray()}
    </ul>
  );
};

export default UserListPage;