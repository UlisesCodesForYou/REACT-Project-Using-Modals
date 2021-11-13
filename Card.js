import React from 'react'
import classes from  './Card.module.css'



const Card = (props) => {
  return <div className={`${classes.card} ${props.className}` }>{props.children}</div> //I was able to put 3 different class names using object literals 
};

export default Card;
