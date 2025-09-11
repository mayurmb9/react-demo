import React from 'react'

export default function ControlledComponent() {

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  return (
    <div style={{
      padding: "1em",
      border: "1px solid #ffffff",
      borderRadius: "5px",
      width: "300px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "1em auto"

    }}>
      <h3>Controlled Component</h3>
      <form action="" >
        <label className="label" htmlFor="name">
          Name  -
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter User Name'
          className="input-field"
          type="text"
          name="name"
          id="name" />
        <br />
        <br />
        <label className="label" htmlFor="email">
          Email -
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter User Email'
          className="input-field"
          type="email"
          name="email"
          id="email" />
        <br />
        <br />
        <label className="label" htmlFor="password">
          Password -
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder='Enter User Password'
          className="input-field"
          type="password"
          name="password"
          id="password"
        />
        <br />
        <br />
        <button
          className="input-field"
          style={{ backgroundColor: "green" }}
          type="submit"
          value="Submit" >Submit</button>
        <button
          onClick={() => {
            setName("")
            setEmail("")
            setPassword("")
          }}
          className="input-field"
          style={{ backgroundColor: "#df0000" }}
          type="reset"
          value="Reset" >Reset</button>
        {name && <h4>Name :- {name}</h4>}
        {email && <h4>Email :- {email}</h4>}
        {password && <h4>Password :- {password}</h4>}

      </form>
    </div>
  )
}