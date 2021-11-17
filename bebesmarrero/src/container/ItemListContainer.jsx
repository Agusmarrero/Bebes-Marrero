import './ListProducts.css';
import { getFetch } from '../helpers/Helpers';
import { useState, useEffect } from 'react'
import ItemList from './ItemList';
import Loading from './Loading';


const ItemListContainer = (props) => {

  const [products, setProducts] = useState([])  
  const [loading, setLoading] = useState(true)  
  
  useEffect(() => {
      getFetch//api Fetch()
      .then(data => {

          setProducts(data)     
      })
      .catch(err => console.log(err))    
      .finally(()=> setLoading(false))
      
      return () => {
          console.log('clean')
      }
  },[])
  return (
    <div className="container">
         { loading ?  <Loading></Loading> : <ItemList products={products} />}
    </div>
  )
  }

export default ItemListContainer