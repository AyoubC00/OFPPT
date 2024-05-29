import { useSelector } from 'react-redux';

const Bac = () => {
  const demands = useSelector((state) => state.demand.demands);

  // Filter demands of type "retirer tamporeirement du bac" with status "Waiting Return"
  const waitingReturnDemands = demands.filter((demand) => demand.type === 'type1' && demand.status === 'Waiting Return');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Bac - Waiting Return</h1>
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
          {waitingReturnDemands.map((demand) => (
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

export default Bac;