import React from 'react'

export default function Props2(props) {
    // console.log(props);
    // console.log(props.name);
    return (
        <div>
            <h3>Using props.name</h3>
            <p>{props.name}</p>
            <hr />
        </div>

    )
}


export function Props3({ name, age }) {

    return (
        <div>
            <h3>Using Destructuring</h3>
            <h4>Name :- {name}</h4>
            <h4>Age :- {age}</h4>
            <hr />
        </div>
    )
}

export function Props4(props) {
    return (
        <div>
            <h3>Pass State</h3>
            <h4>Name :- {props.name}</h4>
            <h4>Age :- {props.age}</h4>
            <h4>Content :- {props.content}</h4>
            <hr />
        </div>
    )
}

export function Props5({ person }) {
    return (
        <div>

            <h3>Pass Object</h3>
            <h4>Name :- {person.name}</h4>
            <h4>Age :- {person.age}</h4>
            <h4>Email :- {person.email}</h4>
            <hr />

        </div>
    )
}

export function Props6({ colleges }) {
    return (
        <div>
            <h3>Pass Array</h3>
            <h4>{colleges[0]}</h4>
            {colleges.map((item) => <h4>{item}</h4>)}
            <hr />
        </div>
    )
}

export function Props7({name}) {
    return (
        <div>
            <h3>On click event</h3>
            <h4>{name}</h4>
            <hr />
        </div>
    )
}

export function Props8({name="New User"}) {
    return (
        <div>
            <h3>Default Props</h3>
            <h4>Hi, {name}</h4>
            <hr />
        </div>
    )
}