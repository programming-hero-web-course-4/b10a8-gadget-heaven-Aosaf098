import { Link, useLocation } from "react-router-dom"

const Navbar = () => {

    const location = useLocation()

  return (
    <>
     <div className={`flex justify-around items-center max-w-[90%] mx-auto ${location.pathname === '/' && 'bg-prim p-6 rounded-t-xl'}`}>
        <div className="flex items-center gap-4">
            <Link to={'/'}>
                <img className="w-10" src="https://img.icons8.com/?size=48&id=TcPxEIKHdr0o&format=png" alt="Logo" />
            </Link>
            <h1 className="text-3xl font-bold font-sora">StarkTech</h1>
        </div>
        <div>
            <ul className={`flex items-center gap-14 ${location.pathname === '/' && 'text-white'}`}>
                <li className="text-lg font-semibold font-sora hover:text-slate-600"><Link to = {'/'}>Home</Link></li>
                <li className="text-lg font-semibold font-sora hover:text-slate-600"><Link to={'stats'}>Statistics</Link></li>
                <li className="text-lg font-semibold font-sora hover:text-slate-600"><Link to={'dashboard'}>Dashboard</Link></li>
                <li className="text-lg font-semibold font-sora hover:text-slate-600"><Link to={'offers'}>Offers</Link></li>
            </ul>
        </div>
        <div className="flex items-center gap-6">
            <div>
                <img className="w-7" src="https://img.icons8.com/?size=24&id=zhda2EVBCvHY&format=png" alt="Cart" />
            </div>
            <div>
                <img className="w-7" src="https://img.icons8.com/?size=24&id=85038&format=png" alt="Wishlist" />
            </div>
        </div>
     </div>
    </>
  )
}

export default Navbar
