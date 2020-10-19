import React from 'react';
import './App.scss';
// import Authorization from './components/Authorization/AuthorizationContainer';
import UserInterfaceContainer from './components/UserInterface/UserInterfaceContainer';

const App = (props) => {
  return (
    <div className="App" >
      <UserInterfaceContainer />
      {/* <Authorization /> */}
    </div>
  );
}

export default App;
