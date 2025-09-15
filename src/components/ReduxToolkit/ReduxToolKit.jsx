import React from 'react'
import ToDos from './ToDo/ToDos'
import AddToDo from './ToDo/AddToDo'

export default function ReduxToolKit() {
  return (
    <div className="app-container">
      <h2 className="app-title">Redux Toolkit ToDo App</h2>
      <AddToDo />
      <ToDos />
    </div>
  )
}
