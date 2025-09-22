import React, { useState } from 'react'

export default function DerivedState() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  const handleAddUser = () => {
    setUsers([...users, user]);
    setUser('');
  }

  //These are the derived states.
  const total = users.length;
  const last = users[users.length - 1];
  const unique = [...new Set(users)];

  return (
    <div>
      <h3>Derived State</h3>

      <h4>Total Users : {total}</h4>
      <h4>Last User : {last}</h4>
      <h4>Total Unique Users : {unique.length}</h4>

      <input
        className='input-field'
        type="text" placeholder='Name'
        value={user}
        onChange={(e) => setUser(e.target.value)} />

      <button onClick={handleAddUser}>
        Add User
      </button>
      <div style={{ display: "flex", gap: "1rem" }}>
        {
          users && users.map((user, index) => (
            <div style={{ padding: "5px" }} key={index}>{user}</div>
          ))
        }
      </div>
    </div>
  )
}
