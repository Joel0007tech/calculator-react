import React from 'react';
import {createRoot} from 'react-dom/client';
import Main from './main';
import Input from './practics';

const project = document.getElementById("root");
const root = createRoot(project);
root.render( <div>
  <Main
    firstNumber = "1"
    secondNumber = "2"
    thirdNumber = "3"
    fourthNumber = "4"
    fifthNumber = "5"
    sixthNumber = "6"
    seventhNumber = "7"
    eightNumber = "8"
    ninthNumber = "9"
    firstSymbol= "+"
    secondSymbol = "-"
    thirdSymbol = "/"
    fourthSymbol = "*"
    fifthSymbol = "="
  />,
  <Input/>
</div>
  
)