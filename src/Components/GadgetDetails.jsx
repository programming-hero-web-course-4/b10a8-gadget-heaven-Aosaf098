import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const GadgetDetails = () => {

    const {gadgetId} = useParams()

    const data = useLoaderData()

    const id = Number(gadgetId)
   
    const gadget = data.find(gadget => gadget.product_id === id)
    const {product_id: cId,} = gadget
  return (
    <>
        <div className='mt-4 pt-16 pb-60 bg-prim w-full flex flex-col items-center justify-center gap-6'>
            <h1 className='text-4xl font-bold font-sora text-center text-white'>Product Details</h1>
            <p className='text-base-100 text-sm font-medium font-sora text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories,br we have it all</p>
        </div>
    </>
  )
}

export default GadgetDetails
