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
      <div className="lg:mt-72 mt-10 bg-base-200">
        <h1 className="text-4xl font-bold font-sora text-center">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="lg:pl-24 flex mt-12 justify-between lg:flex-row flex-col">
          <aside className="lg:w-[15%] lg:h-[400px] lg:px-4 lg:py-4 bg-base-200 lg:space-y-5 lg:block grid grid-cols-2 gap-4 px-2">
            {
                categories2.map((category, idx) => <Sidebar key={idx} category={category} handleCategory={handleCategory} selectedCategory={selectedCategory} />)
            }
          </aside>
          <div className="px-2 lg:mr-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative mx-auto mt-10">
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
