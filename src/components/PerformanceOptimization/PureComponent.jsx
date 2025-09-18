import React, { memo, useRef, useState } from "react";

const PureCounter = memo(({ count }) => {
  const renderCount = useRef(0);
  console.log("PureCounter rendered");
  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "5px" }}>
      <h3>Pure Component (with React.memo)</h3>
      <p>Count: {count}</p>
      <p>Rendered Count :- {renderCount.current++}</p>
    </div>
  );
});


const ImpureCounter = ({ count }) => {
  const renderCount = useRef(0);
  console.log("ImpureCounter rendered");
  return (
    <div style={{ border: "2px solid red", padding: "10px", margin: "5px" }}>
      <h3>Impure Component (normal function)</h3>
      <p>Count: {count}</p>
      <p>Rendered Count :- {renderCount.current++}</p>

    </div>
  );
};





export default function PureComponent() {
  const [count, setCount] = useState(0);
  const [dummy, setDummy] = useState(false);
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2>Pure vs Impure Component</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setDummy(!dummy)} style={{ marginLeft: "10px" }}>
        Force Parent Re-render
      </button>

      <PureCounter count={count} />
      <ImpureCounter count={count} />
    </div>
  )
}
