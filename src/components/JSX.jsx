import React from 'react'

export default function JSX() {

    function multiplication(a, b) {
        return a * b
    }

    const userName = "Ned Stark"
    let x = 10
    let y = 20

    const studentObj = {
        name: "Peter Parker",
        email: "peter@gmail.com",
        age: 20,
        city: "New York"
    }

    const userArray = ["Ned Stark", "John Snow", "Rob Stark", "Sansa Stark", "Arya Stark", "Bran Stark"]

    function operation(a, b, op) {
        if (op === '+') return a + b
        if (op === '-') return a - b
        if (op === '*') return a * b
        if (op === '/') return a / b
        return 0
    }
    return (
        <div>
            <h3>JSX with Curly Braces</h3>

            <p>User Name :- {userName ? userName : "User not found."}</p>

            <p>| x={x} | y={y} | sum={x + y} |</p>

            <p>Multiplication:- {multiplication(x, y)}</p>

            <p>Operation:- {operation(x, y, '/')}</p>

            <p>{JSON.stringify(studentObj)}</p>

            <p>The student Name is <strong>{studentObj.name}</strong></p>

            <p>The student Email is  <strong>{studentObj.email}</strong></p>

            <ul>
                {userArray.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <input type="text" id={userName} value={userName} readOnly />

        </div>
    )
}
