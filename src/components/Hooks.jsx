import React, { use, useEffect, useLayoutEffect, useRef, useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher';
import useToggle from './CustomHook';

export default function () {

  const [count, setCount] = useState(0);

  const inputRef = useRef(null);

  // useEffect(() => {
  //   console.log("Everytime");
  //   inputRef.current && inputRef.current.focus();
  // });

  useEffect(() => {
    console.log("Only once");
  }, []);

  useEffect(() => {
    console.log("Count changed");
  }, [count]);

  const [name, setName] = useState("");

  //useEffect is a cleanup function
  useEffect(() => {
    return () => {
      console.log("Cleanup function");
    }
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect Before Browser Paints");
  })

  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <ThemeSwitcher />
      <h3>Hooks in React JS</h3>
      <h3>Count :- {count}</h3>

      <input
        type="input"
        ref={inputRef}
        placeholder='Enter User Name'
        onChange={(e) => setName(e.target.value)}
        className="input-field"
        value={name}
      />
      <h4>{name}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>

        <button onClick={() => toggleValue(true)}>Show</button>
        <button onClick={() => toggleValue(false)}>Hide</button>
        <button onClick={toggleValue}>Toggle</button>

    
        {
          value && <h4>Sample Text</h4>
        }

    </div>
  )
}
