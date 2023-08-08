import Navbar from './Navbar/Navbar';
import Display from './Display/Display';
import Keyboard from './Keyboard/Keyboard';

import {useState} from 'react';


const Calculator = ({setTheme}) => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('');

    return (
        <div className="py-8 max-w-[540px] mx-auto md:py-24">
            <Navbar setTheme={setTheme} />
            <Display num1={num1} num2={num2} operation={operation}/>
            <Keyboard num1={num1} setNum1={setNum1} num2={num2} setNum2={setNum2} operation={operation} setOperation={setOperation}/>
        </div>
    );
};

export default Calculator;