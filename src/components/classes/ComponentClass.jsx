import React, { Component } from 'react'

export default class ComponentClass extends Component{

    render(){
        return(
            <div>
                <h1>{this.props.valor || 'Padrao'}</h1>
            </div>
        )
    }
            
}