import './App.css';
import { Navbar } from './Components/Weather-Components/Navbar';
import { Weather } from './Components/Weather-Components/Weather';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Weather/>
    </div>
  );
}

export default App;
