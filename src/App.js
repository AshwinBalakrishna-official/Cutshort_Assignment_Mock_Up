import React, { useState } from 'react';
import Progressbar from './components/ProgressBar/ProgressBar';
import './App.css';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [currPg, setCurrPg] = useState(1)

  return (
    <div className="App">

      <Header />
      <Progressbar step={currPg} />

    </div>
  );
}

export default App;
