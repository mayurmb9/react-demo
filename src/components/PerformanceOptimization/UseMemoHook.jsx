import React, { useMemo, useState } from 'react'

export default function UseMemoHook() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(0);

    function expensiveFunction(num) {
        console.log("***Expensive Function for " + num + "***");
        for (let i = 0; i < 1000000000; i++) { }
        return num * 2;
    }
    let doubleCount = useMemo(() => expensiveFunction(inputValue), [inputValue]);

    return (
        <div>
            <h3>useMemo</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <h3>Count : {count}</h3>

            <input
                className='input-field'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Enter Value'
                type="number" />

            <h3>Double Count : {doubleCount}</h3>

        </div>
    )
}
