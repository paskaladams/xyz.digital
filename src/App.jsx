import { Routes, Route } from "react-router-dom"

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import TeamsPage from './pages/TeamsPage';


function App() {

  return (
    <div>
      <NavbarComponent />
        <Routes>
          <Route path="" Component={HomePage}/>
          <Route path="about-us" Component={AboutUs}/>
          <Route path="services" Component={ServicesPage}/>
          <Route path="teams" Component={TeamsPage}/>
        </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
