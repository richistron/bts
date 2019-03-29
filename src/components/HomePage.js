import React, {useEffect, useContext} from 'react';
import Services from '../lib/Services';
import Context from '../Context';

const HomePage = () => {

  const {dispatch} = useContext(Context);

  useEffect(() => {
    const options = {method: 'get', resource: 'users'};
    const cb = users => dispatch({type: 'ADD_USERS', users});
    Services(options).then(cb);
  }, []);

  return (
    <div>
      Home page
    </div>
  );
};

export default HomePage;