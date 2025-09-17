import React, { useState } from "react";

function CustomPromise() {
  const [logs, setLogs] = useState([]);

  const addLog = (message) => {
    setLogs((prev) => [...prev, message]);
  };

  function orderFood(foodItem) {
    return new Promise((resolve, reject) => {
      addLog(`Placing order for ${foodItem}...`);

      setTimeout(() => {
        const isAvailable = Math.random() > 0.3; 

        if (isAvailable) {
          resolve(`${foodItem} is ready!`);
        } else {
          reject(`Sorry, ${foodItem} is not available.`);
        }
      }, 1500);
    });
  }

  const handleOrder = () => {
    setLogs([]); 
    orderFood("Pizza")
      .then((message) => {
        addLog(`SUCCESS: ${message}`);
        return orderFood("Pasta");
      })
      .then((message) => {
        addLog(`SUCCESS: ${message}`);
      })
      .catch((error) => {
        addLog(`ERROR: ${error}`);
      })
      .finally(() => {
        addLog("Order process finished.");
      });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>🍽️ Food Order (Promises)</h2>
      <button onClick={handleOrder} style={{ padding: "10px 20px" }}>
        Place Order
      </button>

      <div style={{ marginTop: "20px" }}>
        <h3>Logs:</h3>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CustomPromise;
