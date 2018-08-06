import React, { Component } from 'react';
import Display from '../Display/Display';
import Pad from '../Pad/Pad';
import './Device.css';

class Device extends Component {
  constructor(props){
    super(props);
    this.state = {
      output: 0,
      input: '',
      curNum: '',
      histArr: []

    }
  }

  // Reinitialises the state
  clear = () => {
    this.setState({
      output: 0,
      input: '',
      curNum: '',
      histArr: []
    });
  }

  // Append clicked number to 'input' string
  numBtnHandler = (n) => {
    if(this.state.curNum.match(/^[0]/gi) && this.state.curNum.length === 1){
      return;
    }
    if(n === '0' && this.state.input.charAt(0) === '0') {
      this.setState({
        input: this.state.input + n.toString(),
        curNum: this.state.curNum + n.toString()
      });
    }else if(n.toString().match(/[0-9]/gi)){
      this.setState({
        input: this.state.input + n.toString(),
        curNum: this.state.curNum + n.toString()
      });
    }
  }

  opBtnHandler = (n) => {
    // Two consecutive operator entries results in replacment with latest one
    if (this.state.input.charAt(this.state.input.length - 1).match(/[+-/*]/g)){
      let arr = this.state.input.split('');
      arr.splice(arr.length-1, 1, n)
      let str = arr.join('');
      this.setState({
        input: str
      });
    }
    // Only allow operator input if previous char is 0-9 and the string starts with a 0-9
    if(this.state.input.charAt(0).match(/[0-9]/gi) && this.state.input.charAt(this.state.input.length-1).match(/[0-9]/gi)){
      this.setState({
        input: this.state.input + n.toString(),
        curNum: ''
      });
    }
  }
  // Removes last char from input string
  backspaceHandler = () => {
    let str = '';
    let arr = this.state.input.split('');
    arr.splice(-1,1); // Removes last element from array
    str = arr.join('');
    this.setState({
      input: str
    });
  }

  // Executes the calculation function passing various arguments
  // Will only execute if the input string end in 0-9
  equalsBtnHandler = () => {
    if(this.state.input.charAt(this.state.input.length-1).match(/[0-9]/gi)){    
      // Create an array of multi digit number and operators in the order of input
      const inputStr = this.state.input;
      let numBuildStr = '';
      var numArr = [];
      this.setState({
        histArr: this.state.histArr.concat(this.state.input)
      });
      for(let i = 0; i < inputStr.length; i++){
        if(inputStr.charAt(i).match(/[0-9]|\./gi)){
          numBuildStr = numBuildStr.concat(inputStr.charAt(i));
        }
      if(inputStr.charAt(i).match(/[\+\-\*/]/gi) || i === inputStr.length-1){
          numArr = numArr.concat(numBuildStr);
          numArr = numArr.concat(inputStr.charAt(i));
          numBuildStr = '';
        };
      }
      numArr.pop();
      // Process the multi digit number and operators to produce the correct result as string
      let resultArr = [].concat(numArr);
      resultArr = this.calculate('/', this.divide, resultArr);
      resultArr = this.calculate('*', this.multiply, resultArr);
      resultArr = this.calculate('-', this.subtract, resultArr);
      resultArr = this.calculate('+', this.add, resultArr);
      if(isNaN(resultArr)){
        resultArr = [0]
      }
      this.setState({
        input: resultArr.join()
      });
    }  
  }
  
  // Processes an operator string, operator function, input array and returns an array
  calculate = (opStr, opFunc, inputArr) => {
    let before;
    let after;
    let arr = inputArr;
    let i = 0;
    while (i <= arr.length) {
      if (arr[i] === opStr) {
        let result = 0;
        before = parseFloat(arr[i - 1]);
        after = parseFloat(arr[i + 1]);
        result = opFunc(before, after);
        arr[i] = result;
        arr[i - 1] = '';
        arr[i + 1] = '';
        arr = arr.filter(elem => elem !== '');
        i = 0;
      }
      i += 1;
    }
    return arr;
  };
  
  add = (a, b) => {
    return a + b;
  }
  
  subtract = (a, b) => {
    return a - b;
  }
  
  multiply = (a, b) => {
    return a * b;
  }
  
  divide = (a, b) => {
    return a / b;
  }

  // Disallows the input of multiple decimals in a number, ending with a decimal and starting with a decimal
  decimalHandler = (n) => {
    if(this.state.curNum.charAt(this.state.curNum.length-1).match(/[0-9]/gi) && this.state.curNum.indexOf('.') === -1){
      this.setState({
        input: this.state.input + n.toString(),
        curNum: this.state.curNum + n.toString()
      });
    }
  }

  // Displays the previous sum in the main display
  undoHandler = () => {
    let histArrCopy = [].concat(this.state.histArr);
    histArrCopy.splice(-1,1);
    this.setState({
      input: this.state.histArr[this.state.histArr.length-1],
      histArr: histArrCopy
    });
  }

  // Clears the current calculation on the display
  ceHandler = () => {
    this.setState({
      input: '',
      curNum: ''
    });
  }
  
  render() {
    return (
      <div id="outer-rectangle">
        <Display input={this.state.input} line2={this.state.histArr[this.state.histArr.length-1]} line3={this.state.histArr[this.state.histArr.length-2]}/>
        <Pad 
          clear={this.clear} 
          numBtnHandler={this.numBtnHandler}
          opBtnHandler={this.opBtnHandler}
          backspaceHandler={this.backspaceHandler}
          decimalHandler={this.decimalHandler}
          equalsBtnHandler={this.equalsBtnHandler}
          undoHandler ={this.undoHandler}
          ceHandler ={this.ceHandler}
        />
      </div>
    );
  }
}

export default Device;