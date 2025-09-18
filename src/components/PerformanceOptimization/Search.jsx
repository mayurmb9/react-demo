import React, { memo } from 'react'

function Search({ onChange }) {
    console.log("Search Rendered")
    return (
        <input
            className='input-field'
            type="text"
            placeholder='Search here ...'
            onChange={(e) => onChange(e.target.value)} />
    )
}

export default memo(Search);