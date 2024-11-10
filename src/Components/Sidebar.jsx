const Sidebar = ({ category, handleCategory, selectedCategory }) => {
  return (
    <>
      <div className="flex flex-col">
        <button
          onClick={() => handleCategory(category)}
          style={{
            backgroundColor:
              selectedCategory === category ? "rgb(168 85 247)" : "white",
          }}
          className="p-2 rounded-3xl bg-slate-200 hover:bg-slate-100 font-sora font-bold"
        >
          {
            category
          }
        </button>
      </div>
    </>
  );
};

export default Sidebar;
