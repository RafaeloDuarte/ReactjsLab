import React, {Component} from 'react'

export default class Contador extends Component{

    state = {
        numero: this.props.numeroInicial
    }
    
    maisUm = () => {
        this.setState({numero : this.state.numero + 1 })
    }
    
    menosUm = () =>{
        this.setState({numero : this.state.numero - 1})
    }

    alterarValor = (diferenca) =>{
        this.setState({numero : this.state.numero - diferenca})
    }
    
    render(){
        return(
            <div>
                <div>Numero: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>

                <button onClick={()=>this.alterarValor(10)}>Inc</button>
                <button onClick={()=>this.alterarValor(-10)}>Dec</button>

            </div>
        )
    }
//      Primeira opção   
//            constructor(props){
//                super(props)
//                this.maisUm = this.maisUm.bind(this)
//            }
}