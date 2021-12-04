import './ListProducts.css';
import { getFetch } from '../helpers/GetFetch';
import { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loading from '../components/Loading';




const ItemListContainer = (props) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { idCategoria } = useParams();
  useEffect(() => {
    if (idCategoria) {

      getFetch                
        .then(data => {
          console.log('llamada Api')
          setProducts(data.filter(prod => prod.categoria === idCategoria));
          console.log("FILTRO" + products)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

      return () => {
        console.log('clean')
      }

    } else {

      getFetch//api Fetch()
        .then(data => {

          setProducts(data)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

      return () => {
        console.log('clean')
      }
    }
  }, [idCategoria])

  return (
    <div className="container-app">
      {loading ? <Loading></Loading> : <ItemList products={products} />}
    </div>
  )
}

export default ItemListContainer