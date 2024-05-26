import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    <>
        <div className="container mx-auto px-4 py-8 bg-fafafa">
      <div className="grid grid-cols-3 gap-4">
        <div className="group hover:scale-105 hover:shadow-lg hover:bg-sky-300 transform transition duration-300 ease-in-out bg-slate-400  rounded-lg overflow-hidden">
          <Link to="" className="block text-center py-4 text-4caf50 font-semibold hover:text-white">
            List Demand
          </Link>
        </div>
        <div className="group hover:scale-105 hover:shadow-lg hover:bg-sky-300 transform transition duration-300 ease-in-out bg-slate-400 rounded-lg overflow-hidden">
          <Link to="bac" className="block text-center py-4 text-4caf50 font-semibold hover:text-white">
            Bac
          </Link>
        </div>
        <div className="group hover:scale-105 hover:shadow-lg hover:bg-sky-300 transform transition duration-300 ease-in-out bg-slate-400 rounded-lg overflow-hidden">
          <Link to="historique" className="block text-center py-4 text-4caf50 font-semibold hover:text-white">
            Historique
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default NavLinks