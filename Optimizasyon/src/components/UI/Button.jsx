import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.children}</button>
    )
}
const Memoized = React.memo(Button)
export default Memoized

// props.onClick === props.prev.onClick