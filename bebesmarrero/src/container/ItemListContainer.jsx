import './ListProducts.css';
import { getFetch } from '../helpers/Helpers';
import { useState, useEffect } from 'react'
import ItemList from './ItemList';

const ItemListContainer = (props) => {

  const [products, setProducts] = useState([])  
  const [loading, setLoading] = useState(true)  
  const [bool, setBool] = useState(true)  
  
  useEffect(() => {
      getFetch//api Fetch()
      .then(data => {
          console.log('llamada Api')   
          setProducts(data)     
      })
      //.then(resp => console.log(resp))
      .catch(err => console.log(err))    
      .finally(()=> setLoading(false))
      
      return () => {
          console.log('clean')
      }
  },[])
  return (
    <div className="container">
         { loading ? <div style={{height:600}}><h1>Cargando...</h1></div>: <ItemList products={products} />}
     
    </div>
  )
  }

export default ItemListContainer