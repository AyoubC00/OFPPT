import {
  fetchDemands,
  updateDemandStatus,
} from "../../../features/demandes/DemandesSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

const Demandes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { demands, loading, error } = useSelector((state) => state.demand);
  const [filterType, setFilterType] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchDemands());
  }, [dispatch]);

  if (!demands) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  const handleAccept = (id) => {
    dispatch(updateDemandStatus({ id, status: "Accepted" }));
    navigate("/dashboard/demandes/historique");
  };

  const handleDecline = (id) => {
    dispatch(updateDemandStatus({ id, status: "Declined" }));
    navigate("/dashboard/demandes/historique");
  };

  const handleReturn = (id) => {
    dispatch(updateDemandStatus({ id, status: "Waiting Return" }));
    navigate("/dashboard/demandes/bac");
  };

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
    return isTypeMatch && isDateMatch && isSearchMatch;
  });

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-900"></div>
      </div>
    );

  if (error)
    return <p className="text-red-500 text-center mt-4">Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8 ">
      {/* Search Bar */}
      <div className="mb-4">
        <div className="relative">
          <input
            id="searchQuery"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name"
            className="border rounded-md px-2 py-1 pl-10 pr-3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <RiSearchLine className="absolute h-5 w-5 text-gray-500 top-1/2 transform -translate-y-1/2 left-3" />
        </div>
      </div>

      {/* Filters */}
      <div className="flex justify-between border rounded-md p-4 mb-8 shadow-md bg-gray-100">
        {/* Filter by Date */}
        <div className="flex items-center space-x-2">
          <label htmlFor="filterDate" className="block text-gray-700 font-semibold">
            Filter by Date:
          </label>
          <input
            id="filterDate"
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="border rounded-md px-2 py-1 shadow-sm focus:outline-none  focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filter by Type */}
        <div className="flex items-center space-x-2">
          <label htmlFor="filterType" className="block text-gray-700 font-semibold">
            Filter by Type:
          </label>
          <select
            id="filterType"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border rounded-md px-2 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            <option value="type2">Certificat du suivi de formation</option>
            <option value="type1">Retirer temporairement du bac</option>
            <option value="type3">Retirer définitivement du bac</option>
          </select>
        </div>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Reset
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Stagiaire
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                CEF
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredDemands.map((demand) => (
              <tr key={demand.id}>
                {demand.status === "Pending" && (
                  <>
                    <td className="px-6 py-4 whitespace-nowrap">{demand.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {demand.stagiaire.user.nom} {demand.stagiaire.user.prenom}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {demand.stagiaire.cef}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {demand.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {demand.type === "type1" ? (
                        <>
                          <button
                            onClick={() => handleReturn(demand.id)}
                            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          >
                            Return
                          </button>
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                            onClick={() => handleDecline(demand.id)}
                          >
                            Decline
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            onClick={() => handleAccept(demand.id)}
                          >
                            Accept
                          </button>
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                            onClick={() => handleDecline(demand.id)}
                          >
                            Decline
                          </button>
                        </>
                      )}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Demandes;
