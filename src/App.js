import './App.css';
import Home from './views/home';
import CountersIndex from './views/countersIndex';
import CalculatorIndex from './views/calculatorIndex';

import {Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/counters">Compteurs</Link>
          </li>
          <li>
            <Link to="/calculator">Calculatrice</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counters" element={<CountersIndex />} />
        <Route path="/calculator" element={<CalculatorIndex />} />
      </Routes>
    </div>
  );
}

export default App;
