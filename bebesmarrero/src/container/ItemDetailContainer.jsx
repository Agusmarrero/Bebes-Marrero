import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { itemPromise  } from "../helpers/GetFetch";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
//   console.log(id);

  useEffect(() => {
    itemPromise.then((resp) => {
      setItem(resp);
      console.log(resp);
    });
  }, []);




  return (
      
    <>

      <ItemDetail item={item} />
     
    </>
  );
};

export default ItemDetailContainer;
