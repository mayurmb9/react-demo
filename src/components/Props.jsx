import React, { useState } from 'react'
import Props2, { Props3, Props4, Props5, Props6, Props7, Props8 } from './Props2';
import Wrapper from './Wrapper';


export default function Props() {
    const content = "Hello World from the Props component";
    const name = "Arya Stark";
    const age = 20;

    const person = {
        name: "John Doe",
        age: 30,
        email: "john@gmail"
    };

    const colleges = ["IIT", "IIM", "IISc", "NIT", "AIIMS"];

    const [student, setStudent] = useState("");


    return (
        <div>
            <h3>Props in React JS</h3>
            <hr />
            <Props2 name="John Doe" />
            <Props3 name="John Doe" age={30} />
            <Props4 content={content} name={name} age={age} />
            <Props5 person={person} />
            <Props6 colleges={colleges} />

            <br />
            <button onClick={() => setStudent("John Doe")}>Set Student</button>
            {student && <Props7 name={student} />}

            <Props8 name="Arya Stark" />
            <Props8 />

            <h3>Wrapper or Pass Children in Props</h3>

            <Wrapper color="orange" >
                <h4>Hello, Everyone</h4>
            </Wrapper>

            <Wrapper >
                <h4>Hello, Peter</h4>
            </Wrapper>
        </div>
    )
}
