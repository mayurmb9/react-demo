import { useState } from 'react'
import './App.css'
import JSX from './components/JSX'
import Pet from './components/Pet'
import Component from './components/Component'
import ClickEvent from './components/ClickEvent'
import State from './components/State'
import Toggle from './components/Toggle'
import MultiConditional from './components/MultiConditional'
import Props from './components/Props'
import InputField from './components/InputField'
import ControlledComponent from './components/ControlledComponent'
import Checkbox from './components/Checkbox'
import RadioDropDown from './components/RadioDropDown'
import Loops from './components/Loops'

function App() {
  const [view, setView] = useState("pet") // default view



  return (
    <div>
      <h3>React JS</h3>
      <nav style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem"
      }}>

        <button onClick={() => setView("component")}>Component</button>
        <button onClick={() => setView("pet")}>Pet</button>


        <button onClick={() => setView("jsx")}>JSX</button>
        <button onClick={() => setView("clickEvent")}>Click Event</button>

        <button onClick={() => setView("state")}>State</button>
        <button onClick={() => setView("toggle")}>Toggle</button>
        <button onClick={() => setView("multiConditional")}>Multi Conditional</button>

        <button onClick={() => setView("props")}>Props</button>
        <button onClick={() => setView("inputField")}>Input Field</button>

        <button onClick={() => setView("controlledComponent")}>Controlled Component</button>
        
        <button onClick={() => setView("checkbox")}>Checkbox</button>
        <button onClick={() => setView("radioDropdown")}>Radio & Dropdown</button>

        <button onClick={() => setView("loops")}>Loops</button>


      </nav>

      <hr />

      {view === "component" && <Component />}
      {view === "pet" && <Pet />}

      {view === "jsx" && <JSX />}
      {view === "clickEvent" && <ClickEvent />}

      {view === "state" && <State />}
      {view === "toggle" && <Toggle />}
      {view === "multiConditional" && <MultiConditional />}

      {view === "props" && <Props />}
      {view === "inputField" && <InputField />}

      {view === "controlledComponent" && <ControlledComponent />}
      
      {view === "checkbox" && <Checkbox />}
      {view === "radioDropdown" && <RadioDropDown />}

      {view === "loops" && <Loops />}

    </div>
  )
}


export default App

