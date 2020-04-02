import React, {useContext} from 'react';
import MyContext from './context'

const MyInfo = ()=>{
  const valueFromContext = useContext(MyContext)
  console.log(valueFromContext)
  return(
    <div>
      <h2>Mi nombre es {valueFromContext.state.name}</h2>
      <button onClick={()=>valueFromContext.changeState({...valueFromContext.state, name: 'Pedro'})}>CHANGE NAME TO PEDRO</button>
    </div>
  )
}

export default MyInfo;