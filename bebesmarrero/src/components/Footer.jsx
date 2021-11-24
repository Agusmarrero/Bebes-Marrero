import React from 'react'
import facebook from '../Facebook.png'
import instagram from '../Instagram.png'
import phone from '../Phone.png'
import './Footer.css';
const Footer = () => {
    return (
        <div>
           <div className="footer"> 
           <h1 style={{paddingTop:40,marginTop:0, float:'left', marginLeft:30}}>MI PEQUEÑA MARGOT</h1>
           <img style={{float:'center'}} src={facebook} alt="logo" width="50" height="50"/>
           <img style={{float:'center',marginLeft:10}} src={instagram} alt="logo" width="52" height="52"/>
           <img style={{float:'center',marginLeft:10}} src={phone} alt="logo" width="52" height="52"/>
           </div>
        </div>
    )
}

export default Footer