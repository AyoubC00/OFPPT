import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDemands } from "../../../features/demandes/DemandesSlice";
import { RiSearchLine } from "react-icons/ri";

const Historique = () => {
  const dispatch = useDispatch();
  const { demands, loading, error } = useSelector((state) => state.demand);

  const [filterType, setFilterType] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchDemands());
  }, [dispatch]);

  const resetFilters = () => {
    setFilterType("");
    setFilterDate("");
    setSearchQuery("");
  };

  const filteredDemands = demands.filter((demand) => {
    const isTypeMatch = filterType === "" || demand.type === filterType;
    const isDateMatch =
      filterDate === "" ||
      (demand.created_at && demand.created_at.includes(filterDate));
    const isSearchMatch =
      searchQuery === "" ||
      (demand.stagiaire &&
        demand.stagiaire.user &&
        demand.stagiaire.user.nom &&
        demand.stagiaire.user.nom
          .toLowerCase()
          .includes(searchQuery.toLowerCase())) ||
      (demand.stagiaire &&
        demand.stagiaire.user &&
        demand.stagiaire.user.cin &&
        demand.stagiaire.user.cin
          .toLowerCase()
          .includes(searchQuery.toLowerCase())) ||
      (demand.stagiaire &&
        demand.stagiaire.user &&
        demand.stagiaire.user.prenom &&
        demand.stagiaire.user.prenom
          .toLowerCase()
          .includes(searchQuery.toLowerCase()));
    return (
      isTypeMatch &&
      isDateMatch &&
      isSearchMatch &&
      ["Accepted", "Declined", "Returned"].includes(demand.status)
    );
  });

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-900"></div>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4 shadow-md rounded-md overflow-hidden">
        <div className="relative">
          <input
            id="searchQuery"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name"
            className="w-full px-3 h-10 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-emerald-600 focus:border-emerald-600"
          />
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <RiSearchLine className="h-5 w-5 text-gray-500" />
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mb-5 shadow-md rounded-md p-4 bg-gray-100 space-y-3 md:space-y-0">
        <div className="flex items-center space-x-2">
          <label
            htmlFor="filterType"
            className="block text-gray-700 font-semibold"
          >
            Filter by Type:
          </label>
          <select
            id="filterType"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="h-10 border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-500 rounded px-2 py-1"
          >
            <option value="">All</option>
            <option value="type2">Certificat du suivi de formation</option>
            <option value="type1">Retirer temporairement du bac</option>
            <option value="type3">Retirer définitivement du bac</option>
          </select>
          <button
            onClick={resetFilters}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Reset
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <label
            htmlFor="filterDate"
            className="block text-gray-700 font-semibold"
          >
            Filter by Date:
          </label>
          <input
            id="filterDate"
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="h-10 border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-500 rounded px-2 py-1"
          />
        </div>
      </div>
      <div className="shadow-md rounded-md overflow-hidden">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-gray-200 text-white">
              <th className="px-4 py-2 text-gray-700 ">ID</th>
              <th className="px-4 py-2 text-gray-700">Stagiaire</th>
              <th className="px-4 py-2 text-gray-700">CEF</th>
              <th className="px-4 py-2 text-gray-700">Type</th>
              <th className="px-4 py-2 text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredDemands.map((demand, index) => (
              <tr key={demand.id} className="bg-white">
                <td className="border px-4 py-2">{demand.id}</td>
                <td className="border px-4 py-2">
                  {demand.stagiaire?.user?.nom} {demand.stagiaire?.user?.prenom}
                </td>
                <td className="border px-4 py-2">{demand.stagiaire?.cef}</td>
                <td className="border px-4 py-2">{demand.type}</td>
                <td className="border px-4 py-2">{demand.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Historique;
