import { useContext, useState } from 'react';
import Class from './Class';

import { SubjectContext } from './ContextData';

export default function College() {

  const {subject,setSubject} = useContext(SubjectContext);

  return (
    <div style={{ background: "#d36767", padding: "1rem" }}>

      <div style={{ display: "flex", gap: "1rem" }}>
        <select
          value={subject}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: 14
          }}
          onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
        </select>

        <button onClick={() => setSubject('')}>Clear Subject</button>

      </div>
      <h3>College</h3>
      <Class />





    </div>
  )
}
