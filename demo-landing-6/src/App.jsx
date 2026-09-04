import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FullMenu from './pages/FullMenu'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<FullMenu />} />
      </Routes>
    </Router>
  )
}

export default App
