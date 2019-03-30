import React from 'react';
import {withRouter} from 'react-router-dom';
import Context from '../Context';
import propTypes from 'prop-types';
import UserForm from './UserForm';
import Anchor from './Anchor';

const UserDetail = props => {
  const {match: {params: {id, action}}} = props;
  const {state} = React.useContext(Context);
  const user = state.users[id + ''] || null;

  return user ? (
    <>
      <h6>
        <Anchor action={'home'} resource={'users'} text={'< Regresar a lista de usuarios'}/>
      </h6>

      {user &&
      <UserForm
        action={action}
        disabled={action === 'view'}
        user={user}
      />
      }
    </>
  ) : null;
};

UserDetail.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string
    })
  })
};

export default withRouter(UserDetail);