import React, { useContext } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { CartContext } from '../App'

const Cart = () => {

    const data = useLoaderData()
    console.log(data)

    const {addCart, cart} = useContext(CartContext)
    const {product_title, product_image, description, price} = cart
    console.log(product_title)
    

  return (
    <div className=''>
      <h1>Botoi: {product_title}</h1>
    </div>
  )
}

export default Cart
