import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import HomePage from './Pages/Home/HomePage';
import ProjectPage from './Pages/Project/ProjectPage';
import AboutMePage from './Pages/AboutMe/AboutMePage';


const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<AppLayout />}>
            <Route path='' element={<HomePage />} />
            <Route path='/project' element={<ProjectPage />} />
            <Route path='/about-me' element={<AboutMePage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
