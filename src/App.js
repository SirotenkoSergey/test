import React from 'react';
import './App.scss';
import Bg from './assets/images/hh.png';

const sectionStyle = {
  backgroundImage: `url(${Bg})`
}

const App = (props) => {
  return (
    <div className="App" style={sectionStyle}>

    </div>
  );
}

export default App;
