import React from 'react';
import classes from './Card.module.css';

const CardImage = (props) => {
  return (
    <div className={`carousel-item ${props.isActive ? 'active' : ''}`}>
     <img
        src={props.URL}
        className={`d-block w-100 ${classes.fixedHeight} `}
        alt="First slide"
    />
</div>
  )
}

export default CardImage