import React, {useState} from 'react';
import MyContext from './context'
import './App.css';
import MyInfo from './MyInfo'

 const App = ()=>{

  const [state, changeState] = useState({
    name: 'Jaime',
    lastName: 'Jacobo',
    alive: true
  })

  const myStatePack = {state, changeState}

    return (
      <MyContext.Provider value={myStatePack} >
        <div className="App">
          <h1>Hola a todos</h1>
          <MyInfo />
        </div>        
      </MyContext.Provider>  
    );     
}

export default App;
