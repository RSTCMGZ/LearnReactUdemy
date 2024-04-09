
import React from 'react'
import MyParagraph from './MyParagraph'

const MyElement = (props) => {
    return (
        <MyParagraph>{props.show ? 'My Element' : ''}</MyParagraph>
    )
}
const MemoizedMyElement = React.memo(MyElement)
export default MemoizedMyElement


// props.show === props.prevValue.show ? 'tekrar render etme' : 'render'