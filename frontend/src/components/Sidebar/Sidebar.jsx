import { Link } from 'react-router-dom'
import { dashboardRoutes } from '../../router'

const Sidebar = () => {
  return (
    <aside className="h-full px-3 py-4 overflow-y-auto bg-gray-200 drop-shadow-lg">
      <ul className="space-y-2 font-medium">
        {dashboardRoutes.map(route => (
          <li key={route.label} >
            <Link to={route.path} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <span className="flex-1 ms-3 whitespace-nowrap">{route.name}</span>
              {route.name === "Demandes" && (<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-red-800 bg-red-100 rounded-full">3</span>)}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar