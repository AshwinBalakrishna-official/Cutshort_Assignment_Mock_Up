import React, { useState } from 'react';
import Progressbar from './components/ProgressBar/ProgressBar';
import './App.css';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormHolder from './components/Forms/FormHolder';
import ProgressBtn from './components/ProgressBtn/ProgressBtn';


function App() {
  // To Track the part of the Form
  const [currPg, setCurrPg] = useState(1)

  return (
    <div className="App">

      <Header />
      <Progressbar step={currPg} choosePg={setCurrPg} />
      <FormHolder step={currPg} />
      <ProgressBtn pg={currPg} choosePg={setCurrPg} />

    </div>
  );
}

export default App;
