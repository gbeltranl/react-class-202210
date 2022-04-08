import React from 'react';
import './Card.scss';
import { ThemeContext } from './themeContext';

export const Card = (props) => {
  const {toggle, toggleFunction} = React.useContext(ThemeContext);
  const { title, url, description } = props;
  const clase = toggle ? "card text-white bg-dark" : "card";
  return (
    <div className={clase} style={{ width: '18rem' }}>
      <img src={url} className='card-img-top' alt={title} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{description}</p>
        <a href='#' className='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  );
};
