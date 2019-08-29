import React from 'react'

//var isTrue = true;
//let isTrue = true;
const isTrue = true;

export default (props) =>
    <div>
        <h1>{props.value}</h1>
        <h1>{props.name}</h1>
        <h1>{isTrue ? 'SIM' : '!'}</h1>
        <h1>{Math.random()}</h1>
    </div>

//export default () =>
//    <h1>Primeiro =>(Arrow)</h1>

// export default function (){
//    return <h1>Primeiro</h1>
//}

//function first(){
//    return <h1>Primeiro</h1>
//}

//export default first