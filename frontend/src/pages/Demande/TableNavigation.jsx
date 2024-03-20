const TableNavigation = () => {
  return (
    <nav className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0">
        <span className="text-sm font-normal text-gray-500">
          Showing
          <span className="font-semibold text-gray-900">1-10</span>
          of
          <span className="font-semibold text-gray-900">1000</span>
        </span>
        <ul className="inline-flex items-stretch -space-x-px">
          <li>
            <a href="#" className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">1</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">2</a>
          </li>
          <li>
            <a href="#" aria-current="page" className="text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 z-10 flex items-center justify-center border px-3 py-2 text-sm leading-tight">3</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">...</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">100</a>
          </li>
        </ul>
      </nav>
  )
}

export default TableNavigation
