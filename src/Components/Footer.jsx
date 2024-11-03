import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='mt-24 space-y-10 pb-10 bg-white'>
            <div className='flex items-center justify-center gap-4 flex-col pt-10'>
                <h1 className='text-center font-bold text-2xl font-sora'>Gadget Heaven</h1>
                <p className='text-sm font-medium text-center font-sora'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr className='w-1/2 mx-auto border border-solid border-black' />
            <div className='flex justify-evenly items-center gap-10'>
                <div className='flex flex-col gap-4'>
                    <h3 className='font-semibold font-sora text-lg'>Services</h3>
                    <ul className='font-medium font-sora text-sm space-y-2 pt-2'>
                        <li>Product Support</li>
                        <li>Order Tracking</li>
                        <li>Shipping & Delivery</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='font-semibold font-sora text-lg'>Company</h3>
                    <ul className='font-medium font-sora text-sm space-y-2 pt-5'>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='font-semibold font-sora text-lg'>Legal</h3>
                    <ul className='font-medium font-sora text-sm space-y-2 pt-5'>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
