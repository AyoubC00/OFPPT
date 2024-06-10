import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchDemands, updateDemandStatus } from '../../../features/demandes/DemandesSlice'
import { useNavigate } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';

const Bac = () => {
  const dispatch = useDispatch();
  const { demands, loading, error } = useSelector((state) => state.demand);
   const navigate = useNavigate();
  const [filterType, setFilterType] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchDemands());
  }, [dispatch]);

   const handleReturn = (id) => {
        dispatch(updateDemandStatus({ id, status: 'Returned' }));
         navigate('/dashboard/demandes/historique')
      };
  const resetFilters = () => {
    setFilterType('');
    setFilterDate('');
    setSearchQuery('');
  };

  const filteredDemands = demands.filter((demand) => {
    const isTypeMatch = filterType === '' || demand.type === filterType;
    const isDateMatch = filterDate === '' || (demand.created_at && demand.created_at.includes(filterDate));
    const isSearchMatch =
      searchQuery === '' ||
      (demand.stagiaire && demand.stagiaire.user && demand.stagiaire.user.nom && demand.stagiaire.user.nom.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (demand.stagiaire && demand.stagiaire.user && demand.stagiaire.user.cin && demand.stagiaire.user.cin.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (demand.stagiaire && demand.stagiaire.user && demand.stagiaire.user.prenom && demand.stagiaire.user.prenom.toLowerCase().includes(searchQuery.toLowerCase()));
    return isTypeMatch && isDateMatch && isSearchMatch && demand.status === 'Waiting Return';
  });

if (loading) return (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-900"></div>
  </div>
);
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold  my-8">Bac - Waiting Return</h1>
<div className="flex flex-col md:flex-row justify-between items-center mb-8">
 
        <div className="mb-4 md:mb-0">
    <label htmlFor="filterType" className="block mb-1 text-sm font-medium text-gray-700">Filter by Type:</label>
    <div className="flex items-center">
    <select
      id="filterType"
      value={filterType}
      onChange={(e) => setFilterType(e.target.value)}
      className="border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-600 focus:border-emerald-600 text-sm py-2 pr-8 pl-4 w-full md:w-auto" // Slightly reduced padding and font size
  >
      <option>All</option>
      <option>Certificat du suivi de formation</option>
      <option>Retirer tamporeirement du bac</option>
      <option>Retirer definitement du bac</option>
  </select>
 
        <button onClick={resetFilters} className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-emerald-600 focus:border-emerald-600">Reset</button>
    </div>
</div>
       
        <div className="mb-4 md:mb-0">
          <label htmlFor="filterDate" className="block mb-1 text-sm font-medium text-gray-700">Filter by Date:</label>
          <input
            id="filterDate"
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-600 focus:border-emerald-600 sm:text-sm"
          />
        </div>
 
        <div className="flex items-center justify-end mt-4 md:mt-0">
          <div className="relative">
            <input
              id="searchQuery"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name"
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-600 focus:border-emerald-600 sm:text-sm pl-10"
            />
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <RiSearchLine className="h-5 w-5 text-gray-500" />
            </span>
          </div>
        </div>
      </div>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Stagiaire</th>
            <th className="border px-4 py-2">CEF</th>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredDemands.map((demand) => (
            <tr key={demand.id}>
              <td className="border px-4 py-2">{demand.id}</td>
              <td className="border px-4 py-2">{demand.stagiaire?.user?.nom} {demand.stagiaire?.user?.prenom}</td>
              <td className="border px-4 py-2">{demand.stagiaire?.cef}</td>
              <td className="border px-4 py-2">{demand.type}</td>
              <td className="border px-4 py-2">{demand.status}</td>
              <td className="border px-4 py-2"><button onClick={() => handleReturn(demand.id)} className="border bg-blue-gray-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2">Return</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bac;