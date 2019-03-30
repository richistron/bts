import React from 'react';
import Context from '../Context';
import UserList from './UserList';
import Anchor from './Anchor';

const fullName = user => `${user.nombre} ${user.apellido_paterno} ${user.apellido_materno}`;

const HomePage = () => {
  const {state: globalState, dispatch} = React.useContext(Context);
  const users = globalState.users || {};
  const ui = globalState.ui || {};
  const [state, setState] = React.useState({checked: ui.tableViewOn || false});

  return (
    <div className={'row'}>
      {ui.tableViewOn ?
        <UserList users={users} />
        :
        <ul className='col-md-10 list-group text-center'>
          {Object.values(users).map( user => {
            return (
              <li key={user.id} className='list-group-item'>
                &#x2B51;
                <Anchor resource={'users'} id={user.id} action={'view'} text={fullName(user)}/>
              </li>
            );
          })}
        </ul>
      }

      <div className={'col-md-2'}>
        <input
          className='form-check-input'
          type='checkbox'
          checked={state.checked}
          onChange={event => {
            dispatch({type: 'TOGGLE_TABLE_VIEW', val: event.target.checked});
            setState({checked: event.target.checked});
          }}
        />
        <label>Vista Completa</label>
      </div>
    </div>
  );
};

export default HomePage;
