import React from 'react'

function UserList() {
    const userData = [
        {id:1, name:"Jon", email:"l2V5U@example.com"},
        {id:2, name:"Arya", email:"l2V5U@example.com"},
        {id:3, name:"Bran", email:"l2V5U@example.com"},
        {id:4, name:"Sansa", email:"l2V5U@example.com"},
    ];
  return (
    <div style={{padding:"1rem"}}>
        <h2>User List</h2>
        {
            userData.map(user => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))
        }
    </div>
  )
}

export default UserList