import { useState } from 'react'
import './App.css'
import JSX from './components/JSX'
import Pet from './components/Pet'
import Component from './components/Component'
import ClickEvent from './components/ClickEvent'
import State from './components/State'

function App() {
  const [view, setView] = useState("pet") // default view



  return (
    <div>
      <h3>React JS</h3>
      <nav style={{ display: "flex", gap: "0.5rem" }}>
        <button onClick={() => setView("jsx")}>JSX</button>
        <button onClick={() => setView("state")}>State</button>
        <button onClick={() => setView("clickEvent")}>Click Event</button>
        <button onClick={() => setView("pet")}>Pet</button>
        <button onClick={() => setView("component")}>Component</button>
      </nav>

      <hr />

      {view === "jsx" && <JSX />}
      {view === "state" && <State />}
      {view === "clickEvent" && <ClickEvent />}
      {view === "pet" && <Pet />}
      {view === "component" && <Component />}

    </div>
  )
}


export default App

