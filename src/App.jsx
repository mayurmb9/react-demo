// import { useState } from 'react'
// import './App.css'
// import Checkbox from './components/Checkbox'
// import ClickEvent from './components/ClickEvent'
// import Component from './components/Component'
// import ControlledComponent from './components/ControlledComponent'
// import CurrencyConvertor from './components/CurrencyConvertor/CurrencyConvertor'
// import Hooks from './components/Hooks'
// import Image from './components/Image'
// import InputField from './components/InputField'
// import JSX from './components/JSX'
// import Loops from './components/Loops'
// import MultiConditional from './components/MultiConditional'
// import Props from './components/Props'
// import RadioDropDown from './components/RadioDropDown'
// import Router from './components/Router'
// import State from './components/State'
// import Toggle from './components/Toggle'
// import ContextAPI from './components/ContextAPI/ContextAPI'
// import { CartProvider, SubjectProvider } from './components/ContextAPI/ContextData'
// import UncontrolledComponent from './components/UncontrolledComponent'
// import { Link } from 'react-router'



import { lazy, useState } from 'react';
import { Link } from 'react-router';
import { CartProvider, SubjectProvider } from './components/ContextAPI/ContextData.jsx';

const JSX = lazy(() => import('./components/JSX.jsx'));
const Image = lazy(() => import('./components/Image.jsx'));
const Hooks = lazy(() => import('./components/Hooks.jsx'));
const Loops = lazy(() => import('./components/Loops.jsx'));
const State = lazy(() => import('./components/State.jsx'));
const Props = lazy(() => import('./components/Props.jsx'));
const Toggle = lazy(() => import('./components/Toggle.jsx'));
const Router = lazy(() => import('./components/Router.jsx'));
const Checkbox = lazy(() => import('./components/Checkbox.jsx'));
const Component = lazy(() => import('./components/Component.jsx'));
const InputField = lazy(() => import('./components/InputField.jsx'));
const ClickEvent = lazy(() => import('./components/ClickEvent.jsx'));
const RadioDropDown = lazy(() => import('./components/RadioDropDown.jsx'));
const ContextAPI = lazy(() => import('./components/ContextAPI/ContextAPI.jsx'));
const MultiConditional = lazy(() => import('./components/MultiConditional.jsx'));
const ControlledComponent = lazy(() => import('./components/ControlledComponent.jsx'));
const UncontrolledComponent = lazy(() => import('./components/UncontrolledComponent.jsx'));
const CurrencyConvertor = lazy(() => import('./components/CurrencyConvertor/CurrencyConvertor.jsx'));


function App() {

  const [view, setView] = useState("image")

  return (
    <div style={{ padding: "2rem" }}>
      <h3>React JS</h3>
      <div style={{
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
        <button onClick={() => setView("unControlledComponent")}>Uncontrolled Component</button>


        <button onClick={() => setView("checkbox")}>Checkbox</button>
        <button onClick={() => setView("radioDropdown")}>Radio & Dropdown</button>

        <button onClick={() => setView("loops")}>Loops</button>
        <button onClick={() => setView("hooks")}>Hooks</button>

        <button onClick={() => setView("currencyConvertor")}>Currency Convertor</button>

        <button onClick={() => setView("router")}>Router</button>

        <button onClick={() => setView("context")}>Context API</button>

        <Link className='link' to="/forms" >Forms</Link>

        <Link className='link' to="/apis" >APIS</Link>

        <Link className='link' to="/performance" >Performance</Link>

      </div>

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

      {view === "unControlledComponent" && <UncontrolledComponent />}

      {view === "checkbox" && <Checkbox />}
      {view === "radioDropdown" && <RadioDropDown />}

      {view === "loops" && <Loops />}
      {view === "hooks" && <Hooks />}

      {view === "currencyConvertor" && <CurrencyConvertor />}

      {view === "router" && <Router />}

      <SubjectProvider>
        <CartProvider>
          {view === "context" && <ContextAPI />}
        </CartProvider>
      </SubjectProvider>
    </div>
  )
}


export default App


