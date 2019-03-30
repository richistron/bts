import React from 'react';
import Context from '../Context';
import {fromJS} from 'immutable';
import UsersTable from './UsersTable';
import Anchor from './Anchor';

const fullName = user => `${ user.get('nombre') } ${ user.get('apellido_paterno') } ${ user.get('apellido_materno') }`;

const UserListPage = () => {
  const {state: globalState} = React.useContext(Context);
  const users = globalState.get('users') || fromJS({});
  const [componentState, setComponentState] = React.useState({fullView: true});

  return (
    <div className={'row'}>
      {componentState.fullView ?
        <UsersTable users={users} />
        :
        <ul className='col-md-10 list-group text-center'>
          {users.toList().map( user => {
            return (
              <li key={user.get('id')} className='list-group-item'>
                &#x2B51;
                <Anchor resource={'users'} id={user.get('id')} action={'view'} text={fullName(user)}/>
              </li>
            );
          }).toArray()}
        </ul>
      }

      <div className={'col-md-2'}>
        <input
          className='form-check-input'
          type='checkbox'
          checked={componentState.fullView ? true : false}
          onChange={() => setComponentState({fullView: !componentState.fullView})}
        />
        <label>Vista Completa</label>
      </div>
    </div>
  );
};

export default UserListPage;
