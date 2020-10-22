import React from 'react';
import './App.scss';
import Authorization from './components/Authorization/AuthorizationContainer';
import MainPage from './components/CRM/MainPage/MainPage';
import { useSelector } from 'react-redux';

const App = (props) => {
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <div className="App" >
      {isAuth ? <MainPage /> : <Authorization />}
    </div>
  );
}

export default App;
