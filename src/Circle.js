import React from 'react'
import './Circle.css'

const Circle = (props) => {
    return (
        <div>
            <div className={"Circle " + props.color} onClick={props.handleClick}></div>
        </div>
    )
}

export default Circle