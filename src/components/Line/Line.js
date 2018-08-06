import React from 'react';
import './Line.css';

const line = (props) => {

    return (
      <div className='Line'>
        <div id={props.id}>
          {props.children}
        </div>
      </div>
    );
}
export default line;