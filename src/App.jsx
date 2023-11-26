import { useState } from 'react';
import './App.css';
import { Navbar } from './Components/Weather-Components/Navbar';
import LoadingBar from "react-top-loading-bar";



function App() {

  const [progress, setProgress] = useState(0)
  return (
    <>
      <div className="App">
        <LoadingBar height={3} color="#f11946" progress={progress} waitingTime={1000}/>
        <Navbar setProgress={setProgress}/>
      </div>
    </>
  );
}

export default App;
