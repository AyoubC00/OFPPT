import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  fetchDemands,
  updateDemandStatus,
} from "../../../features/demandes/DemandesSlice";
import { useNavigate } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";

const Bac = () => {
  const dispatch = useDispatch();
  const { demands, loading, error } = useSelector((state) => state.demand);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchDemands());
  }, [dispatch]);

  const handleReturn = (id) => {
    dispatch(updateDemandStatus({ id, status: "Returned" }));
    navigate("/dashboard/demandes/historique");
  };

  const filteredDemands = demands.filter((demand) => {
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
    return isSearchMatch && demand.status === "Waiting Return";
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
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Stagiaire
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              CEF
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Type
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredDemands.map((demand) => (
            <tr key={demand.id}>
              <td className="px-6 py-4 whitespace-nowrap">{demand.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {demand.stagiaire?.user?.nom} {demand.stagiaire?.user?.prenom}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{demand.stagiaire?.cef}</td>
              <td className="px-6 py-4 whitespace-nowrap">{demand.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">{demand.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleReturn(demand.id)}
                  className="border bg-blue-gray-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Return
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bac;
