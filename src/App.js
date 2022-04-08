import './App.scss';
import React from 'react';
import { ContactForm } from './pages/ContactForm';
import { NavBar } from './components/NavBar';
import { Gallery } from './pages/Gallery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeContext } from './components/themeContext';
import { Root } from './pages/Root';


function App() {
  const {toggle, toggleFunction} = React.useContext(ThemeContext);
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/gallery' element={<Gallery></Gallery>} />
          <Route exact path='/contact-form' element={<ContactForm></ContactForm>}/>
          <Route exact path='/' element={<Root></Root>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
