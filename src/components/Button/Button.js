import React from 'react';
import './Button.css';

const Button = (props) => {

  return (
      <div id={props.id} num={props.num} className="btn-circle btn-txt" onClick={props.onClick}>{props.equals || props.num || props.img}</div>
    )
  }

export default Button

