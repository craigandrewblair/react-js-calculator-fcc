import React from 'react';
import './Display.css';
import Line from '../Line/Line'

const display = (props) => {

    return (
      <div className='Display'>
        <Line id='display'>{props.input === '' ? 0 : props.input}</Line>
        <Line id='dsp-line-2'>{props.line2}</Line>
        <Line id='dsp-line-3'>{props.line3}</Line>
      </div>
    );
}
export default display;