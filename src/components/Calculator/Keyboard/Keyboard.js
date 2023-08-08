const Keyboard = ({num1, num2, setNum1, setNum2, operation, setOperation}) => {

    const updateNumber = e => {
        const clicked = e.currentTarget.value;
        if (operation === '') {
            if (clicked !== '.') {
                setNum1(num1 + clicked);
            } else {
                if (!num1.includes('.')) {
                    setNum1(num1 + clicked);
                }
            }
        } else {
            if (clicked !== '.') {
                setNum2(num2 + clicked);
            } else {
                if (!num2.includes('.')) {
                    setNum2(num2 + clicked);
                }
            }
        }
    }

    const delNumber = () => {
        if (operation === '') {
            if (num1.length > 0) {
                setNum1(num1.slice(0, -1));
            }
        } else {
            if (num2.length > 0) {
                setNum2(num2.slice(0, -1));
            }
        }
    }

    const reset = () => {
        setNum1('');
        setNum2('');
        setOperation('');
    }

    const updateOperation = e => {
        if (num1 !== '' && num2 !== '') {
            const value = calculate(operation)
            setNum1(value);
            setNum2('');
        }
        if (e.currentTarget.value !== '=') {
            setOperation(e.currentTarget.value);
        } else {
            setOperation('');
        }
    }

    const calculate = operation => {
        const val1 = parseFloat(num1);
        const val2 = parseFloat(num2);
        if (operation === '+') {
            return (val1 + val2).toFixed(2);
        } else if (operation === '-') {
            return (val1 - val2).toFixed(2);
        } else if (operation === 'x') {
            return (val1 * val2).toFixed(2);
        } else if (operation === '/') {
            return (val1 / val2).toFixed(2);
        }
    }

    const keys = [
        { value: '7', function: updateNumber },
        { value: '8', function: updateNumber },
        { value: '9', function: updateNumber },
        { value: 'del', function: delNumber, accent: 'reset', other: 'uppercase text-keyAccentS md:text-keyAccentL' },
        { value: '4', function: updateNumber },
        { value: '5', function: updateNumber },
        { value: '6', function: updateNumber },
        { value: '+', function: updateOperation },
        { value: '1', function: updateNumber },
        { value: '2', function: updateNumber },
        { value: '3', function: updateNumber },
        { value: '-', function: updateOperation },
        { value: '.', function: updateNumber },
        { value: '0', function: updateNumber },
        { value: '/', function: updateOperation },
        { value: 'x', function: updateOperation },
        { value: 'reset', function: reset, accent: 'reset', other: 'col-span-2 uppercase text-keyAccentS md:text-keyAccentL' },
        { value: '=', function: updateOperation, accent: 'submit', other: 'col-span-2 text-keyAccentS md:text-keyAccentL' },
    ]

    return (
        <div className="keyboard w-full grid grid-cols-4 grid-rows-5 p-6 gap-[13px] rounded-[10px] md:p-8 md:gap-6">
            {keys.map(key => (
                <button key={key.value} value={key.value} onClick={key.function} className={`key ${key.accent ? `key__${key.accent}` : ''} ${key.other ? `${key.other}` : ''}`}>
                    <p className="mt-1.5">{key.value}</p>
                </button>
            ))}
        </div>
    );
};

export default Keyboard;