import {Routes, Route} from 'react-router-dom';
import Home from '../views/home';
import CountersIndex from '../views/countersIndex';
import CalculatorIndex from '../views/calculatorIndex';
import PageNotFound from '../views/pageNotFound'

export default function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counters" element={<CountersIndex />} />
      <Route path="/calculator" element={<CalculatorIndex />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
