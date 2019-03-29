import React, {useContext} from 'react';
import Context from '../Context';


const HomePage = () => {
  const context = useContext(Context);
  console.log('context',  context);
  return (
    <div>
      Home page
    </div>
  );
};

export default HomePage;