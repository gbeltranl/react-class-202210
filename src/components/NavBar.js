import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext} from './themeContext';

export const NavBar = () => {
  
  const {toggle, toggleFunction} = React.useContext(ThemeContext);
  const clase = toggle ? "navbar navbar-expand-lg navbar-dark bg-dark" : "navbar navbar-expand-lg navbar-light bg-light";
  return (
    <nav className={clase}>
      <a className='navbar-brand' href='#main'>
        ISIS3710
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav me-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/gallery'>
              Gallery
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/contact-form'>
              Contact
            </Link>
          </li>
        </ul>
        <ul className='navbar-nav'>
          <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick = {toggleFunction}/>
          <label class="form-check-label" for="flexSwitchCheckDefault" style = {toggle ? {color : 'white'} : {}}>Cambiar modo</label>
          </div>
        </ul>
        
      </div>
    </nav>
  );
};
