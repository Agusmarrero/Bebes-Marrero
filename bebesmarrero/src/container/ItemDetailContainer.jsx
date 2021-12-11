import React, { useState, useEffect } from "react";
import getFirestore from "../service/getFirestore"

import { useParams } from "react-router-dom";
import { itemPromise  } from "../helpers/GetFetch";
import ItemDetail from "./ItemDetail";
import Loading from '../components/Loading';



const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const [loading, setLoading] = useState(true)
  const { id } = useParams();


  useEffect(() => {
    const db = getFirestore()
    db.collection('productos').doc(id).get()
    .then( res => {        
      // setItem(prodEncontrado.find( product => product.id.toString() === idProd ));
        setItem( {id: res.id, ...res.data()} )
    })    
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
    
    // eslint-disable-next-line       
  },[])  



  return (
      
    <>
        {loading ? <Loading></Loading> : <ItemDetail item={item} />}
     
     
    </>
  );
};

export default ItemDetailContainer;
