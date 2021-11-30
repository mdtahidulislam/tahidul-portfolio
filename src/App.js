import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
