import React from 'react'
import TableNavigation from './TableNavigation';

const index = () => {
  const convertDate = (created_at) => {
    const date = new Date(created_at);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
   
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
   }
  return (
    <section className="p-5 h-full ">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                <tr>
                  <th scope="col" className="px-4 py-3">ID</th>
                  <th scope="col" className="px-4 py-3">Type</th>
                  <th scope="col" className="px-4 py-3">CEF</th>
                  <th scope="col" className="px-4 py-3">Full Name</th>
                  <th scope="col" className="px-4 py-3">Date</th>
                  <th scope="col" className="px-4 py-3">Status</th>
                  <th scope="col" className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {demandes.map(demande=>(
                  <tr className="border-b hover:bg-gray-100" key={demande.id}>
                    <th scope="row" className="p-5 font-medium text-gray-900">{demande.id}</th>
                    <td className="p-5">
                      <span className="bg-primary-100 text-primary-800 rounded px-2 py-0.5 text-xs font-medium">{demande.type}</span>
                    </td>
                    <td className="p-5 font-medium text-gray-900"> {demande.cef} </td>
                    <td className="p-5 font-medium text-gray-900"> {demande.stagiaire.user.nom +" "+ demande.stagiaire.user.prenom} </td>
                    <td className="p-5 font-medium text-gray-900"> {convertDate(demande.created_at)} </td>
                    <td className="p-5 font-medium text-gray-900"> {demande.status} </td>
                    <td className="p-5 font-medium text-gray-900">Just now</td>
                  </tr>
                ))}
                
              </tbody>
            </table>
            <TableNavigation />
          </div>
        </div>
      </div>
    </section>

  )
}

const demandes = [{
  "id": 1,
  "type": "type2",
  "status": "Declined",
  "cef": "ZREIL282",
  "created_at": "2024-03-11T14:24:32.000000Z",
  "updated_at": "2024-03-11T14:24:32.000000Z",
  "stagiaire": {
    "cef": "ZREIL282",
    "groupe_id": 6,
    "filiere_id": 6,
    "user_id": 20,
    "created_at": "2024-03-10T23:18:23.000000Z",
    "updated_at": "2024-03-10T23:18:23.000000Z",
    "user": {
      "id": 20,
      "nom": "Kutch",
      "prenom": "Boris",
      "email": "jakubowski.grace@example.org",
      "role": "stagiaire",
      "cin": "56UL2s",
      "created_at": "2024-03-10T23:18:23.000000Z",
      "updated_at": "2024-03-10T23:18:23.000000Z"
    }
  }
}, {
  "id": 2,
  "type": "type3",
  "status": "Waiting Return",
  "cef": "DPTVJ628",
  "created_at": "2024-03-11T14:24:32.000000Z",
  "updated_at": "2024-03-11T14:24:32.000000Z",
  "stagiaire": {
    "cef": "DPTVJ628",
    "groupe_id": 4,
    "filiere_id": 4,
    "user_id": 7,
    "created_at": "2024-03-10T23:18:23.000000Z",
    "updated_at": "2024-03-10T23:18:23.000000Z",
    "user": {
      "id": 7,
      "nom": "West",
      "prenom": "Deshawn",
      "email": "edgar60@example.net",
      "role": "stagiaire",
      "cin": "r6HsjS",
      "created_at": "2024-03-10T23:18:23.000000Z",
      "updated_at": "2024-03-10T23:18:23.000000Z"
    }
  }
}, {
  "id": 3,
  "type": "type1",
  "status": "Accepted",
  "cef": "ZREIL282",
  "created_at": "2024-03-11T14:24:32.000000Z",
  "updated_at": "2024-03-11T14:24:32.000000Z",
  "stagiaire": {
    "cef": "ZREIL282",
    "groupe_id": 6,
    "filiere_id": 6,
    "user_id": 20,
    "created_at": "2024-03-10T23:18:23.000000Z",
    "updated_at": "2024-03-10T23:18:23.000000Z",
    "user": {
      "id": 20,
      "nom": "Kutch",
      "prenom": "Boris",
      "email": "jakubowski.grace@example.org",
      "role": "stagiaire",
      "cin": "56UL2s",
      "created_at": "2024-03-10T23:18:23.000000Z",
      "updated_at": "2024-03-10T23:18:23.000000Z"
    }
  }
}, {
  "id": 4,
  "type": "type2",
  "status": "Declined",
  "cef": "LECJI579",
  "created_at": "2024-03-11T14:24:32.000000Z",
  "updated_at": "2024-03-11T14:24:32.000000Z",
  "stagiaire": {
    "cef": "LECJI579",
    "groupe_id": 1,
    "filiere_id": 1,
    "user_id": 2,
    "created_at": "2024-03-10T23:18:23.000000Z",
    "updated_at": "2024-03-10T23:18:23.000000Z",
    "user": {
      "id": 2,
      "nom": "Larkin",
      "prenom": "Patricia",
      "email": "eleanore.bradtke@example.net",
      "role": "stagiaire",
      "cin": "jD0DV9",
      "created_at": "2024-03-10T23:18:23.000000Z",
      "updated_at": "2024-03-10T23:18:23.000000Z"
    }
  }
}, {
  "id": 5,
  "type": "type1",
  "status": "Returned",
  "cef": "PBNZS202",
  "created_at": "2024-03-11T14:24:32.000000Z",
  "updated_at": "2024-03-11T14:24:32.000000Z",
  "stagiaire": {
    "cef": "PBNZS202",
    "groupe_id": 5,
    "filiere_id": 5,
    "user_id": 8,
    "created_at": "2024-03-10T23:18:23.000000Z",
    "updated_at": "2024-03-10T23:18:23.000000Z",
    "user": {
      "id": 8,
      "nom": "Wilkinson",
      "prenom": "Rocky",
      "email": "jedediah.labadie@example.com",
      "role": "stagiaire",
      "cin": "YcSbdu",
      "created_at": "2024-03-10T23:18:23.000000Z",
      "updated_at": "2024-03-10T23:18:23.000000Z"
    }
  }
}, {
  "id": 6,
  "type": "type3",
  "status": "Returned",
  "cef": "DPTVJ628",
  "created_at": "2024-03-11T14:24:33.000000Z",
  "updated_at": "2024-03-11T14:24:33.000000Z",
  "stagiaire": {
    "cef": "DPTVJ628",
    "groupe_id": 4,
    "filiere_id": 4,
    "user_id": 7,
    "created_at": "2024-03-10T23:18:23.000000Z",
    "updated_at": "2024-03-10T23:18:23.000000Z",
    "user": {
      "id": 7,
      "nom": "West",
      "prenom": "Deshawn",
      "email": "edgar60@example.net",
      "role": "stagiaire",
      "cin": "r6HsjS",
      "created_at": "2024-03-10T23:18:23.000000Z",
      "updated_at": "2024-03-10T23:18:23.000000Z"
    }
  }
}, {
  "id": 7,
  "type": "type1",
  "status": "Declined",
  "cef": "LECJI579",
  "created_at": "2024-03-11T14:24:33.000000Z",
  "updated_at": "2024-03-11T14:24:33.000000Z",
  "stagiaire": {
    "cef": "LECJI579",
    "groupe_id": 1,
    "filiere_id": 1,
    "user_id": 2,
    "created_at": "2024-03-10T23:18:23.000000Z",
    "updated_at": "2024-03-10T23:18:23.000000Z",
    "user": {
      "id": 2,
      "nom": "Larkin",
      "prenom": "Patricia",
      "email": "eleanore.bradtke@example.net",
      "role": "stagiaire",
      "cin": "jD0DV9",
      "created_at": "2024-03-10T23:18:23.000000Z",
      "updated_at": "2024-03-10T23:18:23.000000Z"
    }
  }
}, {
  "id": 8,
  "type": "type3",
  "status": "Returned",
  "cef": "ZREIL282",
  "created_at": "2024-03-11T14:24:33.000000Z",
  "updated_at": "2024-03-11T14:24:33.000000Z",
  "stagiaire": {
    "cef": "ZREIL282",
    "groupe_id": 6,
    "filiere_id": 6,
    "user_id": 20,
    "created_at": "2024-03-10T23:18:23.000000Z",
    "updated_at": "2024-03-10T23:18:23.000000Z",
    "user": {
      "id": 20,
      "nom": "Kutch",
      "prenom": "Boris",
      "email": "jakubowski.grace@example.org",
      "role": "stagiaire",
      "cin": "56UL2s",
      "created_at": "2024-03-10T23:18:23.000000Z",
      "updated_at": "2024-03-10T23:18:23.000000Z"
    }
  }
}, {
  "id": 9,
  "type": "type3",
  "status": "Pending",
  "cef": "DPTVJ628",
  "created_at": "2024-03-11T14:24:33.000000Z",
  "updated_at": "2024-03-11T14:24:33.000000Z",
  "stagiaire": {
    "cef": "DPTVJ628",
    "groupe_id": 4,
    "filiere_id": 4,
    "user_id": 7,
    "created_at": "2024-03-10T23:18:23.000000Z",
    "updated_at": "2024-03-10T23:18:23.000000Z",
    "user": {
      "id": 7,
      "nom": "West",
      "prenom": "Deshawn",
      "email": "edgar60@example.net",
      "role": "stagiaire",
      "cin": "r6HsjS",
      "created_at": "2024-03-10T23:18:23.000000Z",
      "updated_at": "2024-03-10T23:18:23.000000Z"
    }
  }
}, {
  "id": 10,
  "type": "type2",
  "status": "Waiting Return",
  "cef": "ZREIL282",
  "created_at": "2024-03-11T14:24:33.000000Z",
  "updated_at": "2024-03-11T14:24:33.000000Z",
  "stagiaire": {
    "cef": "ZREIL282",
    "groupe_id": 6,
    "filiere_id": 6,
    "user_id": 20,
    "created_at": "2024-03-10T23:18:23.000000Z",
    "updated_at": "2024-03-10T23:18:23.000000Z",
    "user": {
      "id": 20,
      "nom": "Kutch",
      "prenom": "Boris",
      "email": "jakubowski.grace@example.org",
      "role": "stagiaire",
      "cin": "56UL2s",
      "created_at": "2024-03-10T23:18:23.000000Z",
      "updated_at": "2024-03-10T23:18:23.000000Z"
    }
  }
}]


export default index