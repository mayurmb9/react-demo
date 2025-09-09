import { useState } from 'react'
import './App.css'
import Checkbox from './components/Checkbox'
import ClickEvent from './components/ClickEvent'
import Component from './components/Component'
import ControlledComponent from './components/ControlledComponent'
import CurrencyConvertor from './components/CurrencyConvertor/CurrencyConvertor'
import Hooks from './components/Hooks'
import Image from './components/Image'
import InputField from './components/InputField'
import JSX from './components/JSX'
import Loops from './components/Loops'
import MultiConditional from './components/MultiConditional'
import Props from './components/Props'
import RadioDropDown from './components/RadioDropDown'
import Router from './components/Router'
import State from './components/State'
import Toggle from './components/Toggle'

function App() {
  const [view, setView] = useState("image")



  return (
    <div style={{ padding: "2rem"}}>
      <h3>React JS</h3>
      <nav style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem"
      }}>



        <button onClick={() => setView("component")}>Component</button>
        <button onClick={() => setView("image")}>Image</button>


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
        <button onClick={() => setView("hooks")}>Hooks</button>

        <button onClick={() => setView("currencyConvertor")}>Currency Convertor</button>

        <button onClick={() => setView("router")}>Router</button>

      </nav>

      <hr />

      {view === "component" && <Component />}
      {view === "image" && <Image />}

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
      {view === "hooks" && <Hooks />}

      {view === "currencyConvertor" && <CurrencyConvertor />}

      {view === "router" && <Router />}

    </div>
  )
}


export default App

