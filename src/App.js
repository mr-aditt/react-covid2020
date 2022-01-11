import './App.css';
import Home from './components/Home';
import State from './components/State';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/state-stats" element={<State />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
