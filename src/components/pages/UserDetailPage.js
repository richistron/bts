import React from 'react';
import {withRouter} from 'react-router-dom';
import Context from '../../Context';
import propTypes from 'prop-types';
import UserForm from '../molecules/UserForm';
import Anchor from '../atoms/Anchor';
import newUser from '../../lib/newUser';

const UserDetailPage = props => {
  const {match: {params: {id, action}}} = props;
  const {state} = React.useContext(Context);
  const user = state.users[id + ''] || newUser(state.users);

  return (
    <>
      <h6>
        <Anchor action={'home'} resource={'users'} text={'< Regresar a lista de usuarios'}/>
      </h6>

      {user &&
      <UserForm
        key={action}
        action={action}
        disabled={action === 'view'}
        user={user}
      />
      }
    </>
  );
};

UserDetailPage.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string
    })
  })
};

export default withRouter(UserDetailPage);