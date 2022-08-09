import React, { useState } from 'react';
import Progressbar from './components/ProgressBar/ProgressBar';
import './App.css';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormHolder from './components/Forms/FormHolder';



function App() {
  // To Track the part of the Form
  const [currPg, setCurrPg] = useState(2)

  return (
    <div className="App">

      <Header />
      <Progressbar step={currPg} />
      <FormHolder step={currPg} />

    </div>
  );
}

export default App;
