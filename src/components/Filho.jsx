import React from 'react'

export default props =>{
    return (
        <div>
            <button 
                onClick={()=>props.notificarSaida('Praia')} >
                Vou sair
            </button>
        </div>
    )
}