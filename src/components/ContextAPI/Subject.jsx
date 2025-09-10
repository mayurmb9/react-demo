import React, { useContext } from 'react'
import {SubjectContext} from "./ContextData"
export default function () {
  const {subject} = useContext(SubjectContext);
  console.log("Subject",subject)
  return (
    <div style={{background: "#d89822", padding: "1rem"}}>
        <h3>Subject is : - {subject}</h3>
    </div>
  ) 
}
