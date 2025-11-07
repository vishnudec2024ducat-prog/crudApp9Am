import React, { useContext, useEffect } from 'react'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../utility/ProductSlice'

const Flipkart = () => {
        const dispatch = useDispatch()
   const {productList,isLoading} =   useSelector((state)=>state.productSlice)
   
  useEffect(()=>{
        dispatch(getAllProducts());
  },[])
   
  return (
    <div>
      <div className="row my-2">
        {isLoading ? (
          <h1>loading.....</h1>
        ) : (
          productList.map((elm, ind) => <Product key={ind} elm={elm} />)
        )}
      </div>
    </div>
  );
}

export default Flipkart