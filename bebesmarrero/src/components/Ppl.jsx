import React from 'react'
import '../App.css';
import facebook from '../Facebook.png'
import instagram from '../Instagram.png'
import phone from '../Phone.png'
const Ppl = () => {

    return (
        <div>
            <div>
                <div style={{ display: 'flex', borderBottom:'5px solid white'}}>
                    <img src="https://i.ibb.co/gZYbjmj/Instagram-400-x-500-px.png" alt="Whats-App-Image-2021-11-09-at-11-26-25" style={{ width: 400, height: 500, marginTop: 100, marginLeft: 100 , marginBottom:10}} />
                    <div>
                        <h1 className="title" style={{ marginTop: 180, marginLeft: 60, fontSize: 50 }}>¡SEGUINOS EN LAS REDES SOCIALES!</h1>
                        <img style={{ float: 'center' }} src={facebook}  width="50" height="50" />
                        <img style={{ float: 'center', marginLeft: 10 }} src={instagram}  width="52" height="52" />
                        <img style={{ float: 'center', marginLeft: 10 }} src={phone}  width="52" height="52" />
                    </div>
                </div>
                <div style={{ display: 'flex', marginBottom: 40 }}>
                    <div>
                        <h1 className="title" style={{ marginTop: 180, marginLeft: 50, fontSize: 50 }}>NUEVOS INGRESOS</h1>
                        <button style={{ marginLeft: 50 }} className="btnSeconday btn-outline-secondary btn-block">COMPRAR</button>
                    </div>
                    <img src="https://i.ibb.co/wLzFJQW/1.png" style={{ width: 800, height: 500, marginTop: 100, marginLeft: 100 }} />
                </div>


            </div>
        </div>
    )
}

export default Ppl;