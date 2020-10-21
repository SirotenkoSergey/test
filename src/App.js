import React from 'react';
import './App.scss';
// import Authorization from './components/Authorization/AuthorizationContainer';
import UserInterfaceContainer from './components/UserInterface/UserInterfaceContainer';

const App = (props) => {
  return (
    <div className="App" >
      <div className="container">
        <UserInterfaceContainer />
        {/* <Authorization /> */}
      </div>
    </div>
  );
}

export default App;
