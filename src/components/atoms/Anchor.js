import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Anchor = props => {
  const usersRoute = () => props.action === 'home' ?
    '/'
    :
    props.action === 'new' ?
      '/users/' + props.action
      :
      '/users/' + props.id + '/' + props.action;
  switch (props.resource) {
    case 'users':
      return (
        <Link
          className={props.className}
          to={usersRoute()}
        >
          {props.text}
        </Link>
      );
    default:
      throw new Error('resource not found');
  }
};

Anchor.propTypes = {
  resource: propTypes.oneOf(['users']),
  id: propTypes.oneOfType([propTypes.string, propTypes.number]),
  action: propTypes.oneOf(['home', 'view', 'edit', 'new']),
  text: propTypes.string,
  className: propTypes.string,
};

export default Anchor;