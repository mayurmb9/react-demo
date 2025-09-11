import React from 'react'
import College from './College'
import Item from './Item'
import Cart from './Cart'

export default function ContextAPI() {
    return (
        <div style={{ background: "gray", padding: "1rem" }}>
            <h3>Context API</h3>
            <College />

            <div style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                border: "2px solid #ffffff",
                padding: "1rem",
                justifyContent: 'center',
            }}>

                <Item name="MacBook" price={50000} />
                <Item name="iPhone" price={80000} />
                <Item name="iPad" price={60000} />
                <Item name="AirPods" price={20000} />
                <Item name="Apple Watch" price={35000} />
                <Item name="HomePod" price={25000} />
                <Item name="Apple TV" price={18000} />
            </div>

            <Cart />

        </div>
    )
}
