import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Gadget from "./Gadget";

const Gadgets = () => {

    const [gadgets, setGadgets] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All')
    console.log(selectedCategory)

    const handleCategory = (type) => {
        setSelectedCategory(type)
        console.log(12345)
    }

    const filteredTypes = gadgets.filter(gadget => gadget.category === selectedCategory || selectedCategory === 'All')

    useEffect(() => {
        fetch('gadgets.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])

    console.log(gadgets)

    let newArr = []
    for (let i = 0; i < gadgets.length; i++) {
        newArr.push(gadgets[i].category)
    } 
    const categories = [...new Set(newArr)]

  return (
    <>
      <div className="mt-72 bg-base-200">
        <h1 className="text-4xl font-bold font-sora text-center">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="pl-24 flex mt-12 justify-between">
          <aside className="w-[15%] h-[700px] px-4 py-4 border-4 border-solid border-base-600 space-y-5">
            <button onClick={() => handleCategory('All')} className='px-12 py-2 rounded-3xl bg-slate-200 font-sora font-bold hover:bg-slate-100'>All Products</button>
            {
                categories.map((category, idx) => <Sidebar key={idx} category={category} gadgets={gadgets} handleCategory={handleCategory} selectedCategory={selectedCategory} />)
            }
            <button onClick={() => handleCategory('')} className='px-[70px] py-2 rounded-3xl bg-slate-200 font-sora font-bold hover:bg-slate-100'>Drones</button>
          </aside>
          <div className="px-2 mr-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                // gadgets.map((gadget, idx) => <Gadget key={idx} gadget={gadget} />)
                filteredTypes.map((item, idx) => <Gadget key={idx} item={item} />)
            }  
          </div>
          <div>
            {
            
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Gadgets;
