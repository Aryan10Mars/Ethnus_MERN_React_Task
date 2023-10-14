import React, { useState, useEffect } from 'react';

export function Task2() {
    const keys = [
        {
            keycode: 55,
            label: "7"
        },
        {
            keycode: 56,
            label: "8"
        },
        {
            keycode: 57,
            label: "9"
        },
        {
            keycode: 52,
            label: "4"
        },
        {
            keycode: 53,
            label: "5"
        },
        {
            keycode: 54,
            label: "6"
        },
        {
            keycode: 49,
            label: "1"
        },
        {
            keycode: 50,
            label: "2"
        },
        {
            keycode: 51,
            label: "3"
        },
        {
            keycode: 48,
            label: "0"
        },
        {
            keycode: 190,
            label: "."
        },
        {
            keycode: 13,
            label: "="
        }
    ]

    const symbol = [
        {
            label: "⌫",
            keycode: 8,
            value: "backspace",
        },
        {
            label: "÷",
            keycode: 111,
            value: "/",
        },
        {
            label: "x",
            keycode: 56,
            value: "*",
        },
        {
            label: "-",
            keycode: 109,
            value: "-",
        },
        {
            label: "+",
            keycode: 107,
            value: "+",
        },
    ]

    const [exp, setExp] = useState('');
    const [ans, setAns] = useState(null);

    const handleKeyPress = (keycode, key) => {
        let updatedExp = exp;

        if (keycode === 8) {
            updatedExp = updatedExp.slice(0, -1);
            setAns(null);
        }
        else if (keycode === 13) {
            try {
                const result = eval(exp);
                setAns(result);
                updatedExp = '';
            } catch (error) {
                setAns('Error');
                updatedExp = 'Error';
            }
        }
        else {
            setAns(null);
            updatedExp += key;
        }

        setExp(updatedExp);
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            const { keyCode, key } = event;
            const isKeyInArray = keys.some((item) => item.keycode === keyCode);
            const isSymbolInArray = symbol.some((item) => item.keycode === keyCode);

            if (isKeyInArray || isSymbolInArray) {
                handleKeyPress(keyCode, isKeyInArray ? key : symbol.find(item => item.keycode === keyCode).value);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyPress, keys, symbol]);


    const headingStyle = {
        fontSize: '40px',
        fontWeight: 'bold',
    };

    const subheadingStyle = {
        padding: "16px",
        fontSize: '24px',
    };

    return (
        <div className='container p-0 bg-light  border border-0'>
            <h1 style={headingStyle}>Aryan Sharma</h1>
            <h2 style={subheadingStyle}>21BBS0106</h2>
            <div className='display'>
                <div className='display-expression'>
                    {exp !== '' && <p>{exp}</p>}
                </div>
                <div className='display-answer'>
                    {ans !== null && <p>{ans}</p>}
                </div>
            </div>
            <div className='keypad' >
                <div className='keypad-keys'>
                    {
                        keys.map((item, index) => (
                            <p onClick={() => handleKeyPress(item.keycode, item.label)} key={index} > {item.label}</p>)
                        )
                    }
                </div>
                <div className='keypad-symbols'>
                    {
                        symbol.map((item, index) => (
                            <p onClick={() => handleKeyPress(item.keycode, item.value)} key={index}>{item.label}</p>))
                    }
                </div>
            </div>
        </div>
    )
}