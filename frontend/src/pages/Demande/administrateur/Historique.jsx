import { useEffect } from "react";
import { fetchDemands } from '../../../features/demandes/DemandesSlice'
import { useSelector,useDispatch } from "react-redux";
const Historique = () => {
 const dispatch = useDispatch();
    const { demands, loading, error } = useSelector(state => state.demand);

    useEffect(() => {
        dispatch(fetchDemands());
    }, [dispatch]);

    // Filter demands that are accepted, declined, or returned
    const filteredDemands = demands.filter((demand) => ['Accepted', 'Declined', 'Returned'].includes(demand.status));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Historiques</h1>
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