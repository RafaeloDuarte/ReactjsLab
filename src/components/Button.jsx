import React from 'react'
import './Button.css'

export default props =>{
 
    let cssClasses = 'button '
    cssClasses+=props.operation ? 'operation' : ''
    cssClasses+=props.double ? 'double' : ''
    cssClasses+=props.triple ? 'triple' : ''
    return(
        <button
            onClick={e => props.click && props.click(props.label)} 
            className={cssClasses}>
            {props.label}
        </button>
    )
}
