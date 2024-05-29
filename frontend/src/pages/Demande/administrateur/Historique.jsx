import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDemands } from "../../../features/demandes/DemandesSlice";
import { RiSearchLine } from 'react-icons/ri';
// import Typewriter from 'typewriter-effect';


const Historique = () => {
  const dispatch = useDispatch();
  const { demands, loading, error } = useSelector((state) => state.demand);

  const [filterType, setFilterType] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchDemands());
  }, [dispatch]);

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
    return isTypeMatch && isDateMatch && isSearchMatch && ['Accepted', 'Declined', 'Returned'].includes(demand.status);
  });

if (loading) return (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-900"></div>
  </div>
);
  if (error) return <p>Error: {error}</p>;

   return (
    <div className="container mx-auto px-4 py-8">
      {/* <div className="flex-1 bg-center h-full ">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("L'Historique")
              .pauseFor(1000)
              .start();
          }}
        />
      </div> */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div className="mb-4 sm:mb-0">
          <label htmlFor="filterType" className="block mb-1">Filter by Type:</label>
          <select
            id="filterType"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border rounded-md px-2 py-1"
          >
            <option value="">All</option>
            <option value="type2">Certificat du suivi de formation</option>
            <option value="type1">Retirer tamporeirement du bac</option>
            <option value="type3">Retirer definitement du bac</option>
          </select>
          <button onClick={resetFilters} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">Reset</button>
        </div>
        <div className="mb-4 sm:mb-0">
          <label htmlFor="filterDate" className="block mb-1">Filter by Date:</label>
          <input
            id="filterDate"
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="border rounded-md px-2 py-1"
          />
        </div>
        <div className="flex items-center">
          <div className="relative">
            <input
              id="searchQuery"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name"
              className="border rounded-md px-2 py-1 pl-8 pr-3"
            />
            <RiSearchLine className="absolute h-5 w-5 text-gray-500 top-1/2 transform -translate-y-1/2 left-3" />
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Historique;