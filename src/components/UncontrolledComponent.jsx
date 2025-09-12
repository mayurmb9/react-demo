import React, { useRef } from 'react'

export default function UncontrolledComponent() {

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`
      Name: ${nameRef.current.value}
      Email: ${emailRef.current.value}
      Password: ${passwordRef.current.value}
    `)
  }

  const handleReset = () => {
    if (nameRef.current) nameRef.current.value = ""
    if (emailRef.current) emailRef.current.value = ""
    if (passwordRef.current) passwordRef.current.value = ""
  }

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
      <h3>Uncontrolled Component</h3>
      <form onSubmit={handleSubmit} style={{ display: "block"}} >
        <label className="label" htmlFor="name">
          Name -
        </label>
        <input
          ref={nameRef}
          placeholder='Enter User Name'
          className="input-field"
          type="text"
          name="name"
          id="name"
        />
        <br /><br />

        <label className="label" htmlFor="email">
          Email -
        </label>
        <input
          ref={emailRef}
          placeholder='Enter User Email'
          className="input-field"
          type="email"
          name="email"
          id="email"
        />
        <br /><br />

        <label className="label" htmlFor="password">
          Password -
        </label>
        <input
          ref={passwordRef}
          placeholder='Enter User Password'
          className="input-field"
          type="password"
          name="password"
          id="password"
        />
        <br /><br />

        <button
          className="input-field"
          style={{ backgroundColor: "green" }}
          type="submit"
        >
          Submit
        </button>

        <button
          onClick={handleReset}
          className="input-field"
          style={{ backgroundColor: "#df0000" }}
          type="button"
        >
          Reset
        </button>
      </form>
    </div>
  )
}
