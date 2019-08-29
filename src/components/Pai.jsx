import React from 'react'
import Filho from '../components/Filho'

export default props =>{

    const notificarSaidaAoPai = lugar =>
        alert(`Liberada a saída para ${lugar}`)

    return (
        <div>
            <Filho notificarSaida = {notificarSaidaAoPai}/>
        </div>
    )
}