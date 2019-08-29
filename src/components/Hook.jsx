import React, { useState, useEffect } from 'react'

export default props =>{
    const [num, setSoma] = useState(100)
    const [status, setParOuImpar] = useState('Par')

    useEffect(() =>{
        num % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Impar')
    })

    return(
        <div>
            <h1>{num}</h1>
            <button onClick={()=>setSoma(num+1)}>Hey</button>
            <h1>{status}</h1>
        </div>
    );
}