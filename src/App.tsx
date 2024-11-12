
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Menu from './components/Menu';
import Practice from './components/Practice';
import About from './components/About';
import WhatIsKendo from './components/WhatIsKendo';
import Reading from './components/Reading';
import './styles/_base.scss';

function App() {

  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/practice-times" element={<Practice />} />
          <Route path="/about-club" element={<About />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/history" element={<h1>History of the Club</h1>} />
          <Route path="/what-is-kendo" element={<WhatIsKendo />} />          
        </Routes>
      </Router>
    </>
  )
}

export default App
