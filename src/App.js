import React from 'react';
import './App.scss';
import Title from './components/Title';
import Steps from './components/Steps';
import FormaContainer from './components/Forma/FormaContainer';

function App() {
  return (
    <div className="App">

      <Title text='Your first project' />

      <Steps />

      <FormaContainer />

    </div>
  );
}

export default App;
