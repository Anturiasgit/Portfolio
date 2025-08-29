import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Project from './pages/Project/Project'
import Mentions from './pages/Mentions/Mentions'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/mentions-legales" element={<Mentions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App 