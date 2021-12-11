import './ListProducts.css';
import { getFetch } from '../helpers/GetFetch';
import getFirestore from "../service/getFirestore"
import { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loading from '../components/Loading';




const ItemListContainer = (props) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { idCategoria } = useParams();
  useEffect(() => {
        
    const dbQuery = getFirestore()
    

    if(idCategoria){

        dbQuery.collection('productos').where('categoria', '==', idCategoria).get() // traer todo
            .then(data => setProducts(   data.docs.map(pro => ( { id: pro.id, ...pro.data() } ))   ))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false)) 

    }else{

        dbQuery.collection('productos').get() // traer todo
            .then(data => setProducts(   data.docs.map(pro => ( { id: pro.id, ...pro.data() } ))   ))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))
    }
},[idCategoria])

  return (
    <div className="container-app">
      {loading ? <Loading></Loading> : <ItemList products={products} />}
    </div>
  )
}

export default ItemListContainer