import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Gadget from "./Gadget";
import Drones from "./Drones";

const Gadgets = () => {

    const [gadgets, setGadgets] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All Products')
    
    useEffect(() => {
        fetch('gadgets.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    }, [])
    
    const categories2 = ['All Products', ...new Set(gadgets.map(cat => cat.category))];
    
    const handleCategory = (type) => {
        setSelectedCategory(type)
    }

    const filteredTypes = gadgets.filter(gadget => gadget.category === selectedCategory || selectedCategory === 'All Products')
    console.log(filteredTypes)

  return (
    <>
      <div className="mt-72 bg-base-200">
        <h1 className="text-4xl font-bold font-sora text-center">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="pl-24 flex mt-12 justify-between">
          <aside className="w-[15%] h-[400px] px-4 py-4 bg-base-200 space-y-5">
            {
                categories2.map((category, idx) => <Sidebar key={idx} category={category} handleCategory={handleCategory} selectedCategory={selectedCategory} />)
            }
            {/* <button onClick={() => handleCategory('')} className='px-[70px] py-2 rounded-3xl bg-slate-200 font-sora font-bold hover:bg-slate-100'>Drones</button> */}
          </aside>
          <div className="px-2 mr-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {
                // gadgets.map((gadget, idx) => <Gadget key={idx} gadget={gadget} />)
                // filteredTypes.map((item, idx) => <Gadget key={idx} item={item} />)
                filteredTypes.map((item, idx) => 
                    !(item.category === 'Drones') || (selectedCategory === 'All Products') ? <Gadget key={idx} item={item} /> :
                <Drones />
                )
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
