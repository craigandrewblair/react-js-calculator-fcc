import React from 'react';
import './Pad.css';
import Button from '../Button/Button';
import UndoImg from '../../images/undo.png';
import CancelImg from '../../images/cancel.png';
import DivideImg from '../../images/divide.png';
import PlusImg from '../../images/plus.png';
import MultiplyImg from '../../images/multiply.png';
import MinusImg from '../../images/minus.png';
import BackspaceImg from '../../images/backspace.png';
import CEImg from '../../images/ce.png';

const pad = (props) => {

  return (
    <div id='pad-rectangle'>
      <Button id="undo" img={<img id="undo-img" src={UndoImg} />} onClick={props.undoHandler}/>
      <Button id="seven" num="7" onClick={() => props.numBtnHandler('7')}/>
      <Button id="eight" num="8" onClick={() => props.numBtnHandler('8')}/>
      <Button id="nine" num="9" onClick={() => props.numBtnHandler('9')}/>
      <Button id="clear" img={<img id="clear-img" src={CancelImg}/>} onClick={props.clear}/>
      <Button id="divide" img={<img id="divide-img" src={DivideImg}/>} onClick={() => props.opBtnHandler('/')}/>
      <Button id="four" num="4" onClick={() => props.numBtnHandler('4')}/>
      <Button id="five" num="5" onClick={() => props.numBtnHandler('5')}/>
      <Button id="six" num="6" onClick={() => props.numBtnHandler('6')}/>
      <Button id="add"  img={<img id="add-img" src={PlusImg}/> } onClick={() => props.opBtnHandler('+')}/>
      <Button id="multiply" img={<img id="multiply-img" src={MultiplyImg}/>} onClick={() => props.opBtnHandler('*')}/>
      <Button id="one" num="1" onClick={() => props.numBtnHandler('1')}/>
      <Button id="two" num="2" onClick={() => props.numBtnHandler('2')}/>
      <Button id="three" num="3" onClick={() => props.numBtnHandler('3')}/>
      <Button id="subtract" img={<img id="minus-img" src={MinusImg}/>} onClick={() => props.opBtnHandler('-')}/>
      <Button id="backspace" img={<img id="backspace-img" src={BackspaceImg}/>} onClick={() => props.backspaceHandler('/')}/>
      <Button id="ce" img={<img id="ce-img" src={CEImg}/>} onClick={() => props.ceHandler()}/>
      <Button id="zero" num="0" onClick={() => props.numBtnHandler(0)}/>
      <Button id="decimal" num="." onClick={() => props.decimalHandler('.')}/>
      <Button equals={<span id="equals">=</span>} onClick={() => props.equalsBtnHandler('.')}/>
    </div>
  )
}
export default pad
