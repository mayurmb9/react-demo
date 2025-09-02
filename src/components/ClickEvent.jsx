import React from 'react'

const inlineFunction = (name) => {
    alert(name+" Arrow Button Clicked---")
}

export default function ClickEvent() {

    function callFunction() {
        alert("Call Button Clicked")
    }
    const arrowFunction = () => {
        alert("Arrow Button Clicked")
    }

    const inlineFunction = (name) => {
        alert(name+" Arrow Button Clicked")
    }

    return (
        <>
            <h3>Event and function call</h3>
            <div style={{ display: "flex", gap: "0.5rem" }}>
               
                <button onClick={callFunction}>
                    Normal Function
                </button>

                <button onClick={arrowFunction}>
                    Arrow Function
                </button>

                <button onClick={() => alert("Inline Button Clicked")}>
                    Inline Function
                </button>

                <button onClick={() => inlineFunction("Inline")}>
                    Inline Arrow Function
                </button>

            </div>


        </>
    )
}
