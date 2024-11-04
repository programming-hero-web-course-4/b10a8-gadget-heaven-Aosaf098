import React from 'react'

const Sidebar = ({category}) => {

  return (
    <>
        <div className='flex flex-col'>
            <button className='p-2 rounded-3xl bg-slate-200 font-sora font-bold'>{category}</button>
        </div>
    </>
  )
}

export default Sidebar
