import React from 'react'
import { childrenWithProps } from '../utils/index'

export default props => 
    <div>
        <h1>Família</h1>
        {childrenWithProps(props)}
        {/*React.cloneElement(props.children , {
            lastName : props.lastName
        })*/}

        
        {/*props.children*/} 
        
    </div>