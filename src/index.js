import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import FirstComponent from './components/FirstComponent'
//import A, { CompB as B } from './components/TwoComponents'
//import Family from './components/Family'
//import Member from './components/Member'
//import ComponentWithFunc from './components/ComponentWithFunc'
//import Pai from './components/Pai'
//import CompClass from './components/classes/ComponentClass' 
//import Contador from './components/classes/Contador'
import Hook from './components/Hook'

ReactDOM.render(
    <div>
        <Hook/>
        {/*<Contador numeroInicial={100}/>*/}
        {/*<CompClass valor = "Valor"/>*/}
        {/*<Pai/>*/}
        {/*<ComponentWithFunc/>*/}
        {/*<Family lastName="Duarte">
            <Member name ="Rafaras"/>
            <Member name ="Rafaras"/>
            <Member name ="Rafaras"/>
        </Family>*/}
    </div>, document.getElementById('root')
);

serviceWorker.unregister();

//Aulas para repetir Aula 25 e Aula 19
