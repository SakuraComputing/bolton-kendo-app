
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import './styles/_base.scss';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/practice-times" element={<h1>Practice Times</h1>} />
          <Route path="/about-club" element={<h1>About Club</h1>} />
          <Route path="/reading" element={<h1>Reading</h1>} />
          <Route path="/history" element={<h1>History of the Club</h1>} />
          <Route path="/what-is-kendo" element={<h1>What is Kendo</h1>} />          
        </Routes>
      </Router>
    </>
  )
}

export default App
