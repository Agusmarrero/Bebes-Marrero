import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { itemPromise  } from "../helpers/GetFetch";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true)
//   console.log(id);

  useEffect(() => {
    itemPromise.then((resp) => {
      setItem(resp.find(item => item.id.toString() === id));
      console.log(item);
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))

  return () => {
    console.log('clean')
  }
  }, []);




  return (
      
    <>

      <ItemDetail item={item} />
     
    </>
  );
};

export default ItemDetailContainer;
