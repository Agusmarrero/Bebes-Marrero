import React from 'react'
import loadingBuff from '../loading-buffering.gif'
const Loading = () => {
    
    return (
        <div style={{height:600}}>
        <img src={loadingBuff} alt="loading" style={{width:100, height:100,  marginTop:100}}/>
          <h1 style={{fontSize:60, marginTop:50}}>Cargando...</h1>
          
        </div>
    )
}

export default Loading;