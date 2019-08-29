import React from 'react'

const aprovados = ['Rafaras','Rafaras1','Rafaras2']

export default props => {
    const gerarItens = itens =>{
        return itens.map(item => <li>{item}</li>)
    }

    return(
        <ul>{gerarItens(aprovados)}</ul>
    );

}