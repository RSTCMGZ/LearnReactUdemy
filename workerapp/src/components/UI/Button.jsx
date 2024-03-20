import React from 'react'

function Button(props) {
    return (
        <button
            className={`p-2 text-lg bg-teal-700 text-white mt-2 
        ${props.className}
        `}
            type={props.type || 'button'}
        >{props.children}</button>
    )
}

export default Button