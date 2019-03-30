import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Context from '../Context';
import propTypes from 'prop-types';
import UserForm from './UserForm';

const UserDetail = props => {
  const {match: {params: {id}}} = props;

  const {state} = React.useContext(Context);

  const user = state.getIn(['users', id], null);

  return user ? (
    <>
      <h6>
        <Link to={'/'}>
          Inico
        </Link>
      </h6>
      <div className='jumbotron'>
        <UserForm
          action={'view'}
          disabled
          user={user}
        />
      </div>
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