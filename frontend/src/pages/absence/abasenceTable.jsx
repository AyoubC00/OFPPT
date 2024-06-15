import {
  Button,
  Typography
} from "@material-tailwind/react";
import { Switch } from '@headlessui/react'
import { useState } from "react";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const student = {
  id: 69,
  name: "Ali Jbar",
  isPrevAbsente: true,
}

/**
 * Row: is a component that represent a student row in that table of absence
 * @sudent: is an object of student, it must have those keys
 *  id, name, isPrevAbsente
 * @rowNum: It should give the index of that student in the array
 *  this param will help in styling the table
 * @marked: Optional parameter if it set to true this student absente state
 *  of that day will not allowed to set (the switch will be disabled).
 */
function Row({ student, rowNum, marked = false }) {
  return <tr key={student.id}>
    <td
      className={classNames(
        rowNum === 0 ? '' : 'border-t border-transparent',
        'relative py-4 pl-4 sm:pl-6 pr-3 text-sm'
      )}
    >
      <div className="font-medium text-gray-900">
        {student.name}
      </div>
      <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
        {student.isPrevAbsente ? <span className="text-indigo-600 lg:hidden">(absente last session)</span> : null}
      </div>
      {rowNum !== 0 ? <div className="absolute right-0 left-6 -top-px h-px bg-gray-200" /> : null}
    </td>
    <td
      className={classNames(
        rowNum === 0 ? '' : 'border-t border-gray-200',
        'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
      )}
    >
      {student.isPrevAbsente ? "Presnet" : "Absente"}
    </td>
    <td
      className={classNames(
        rowNum === 0 ? '' : 'border-t border-gray-200',
        'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
      )}
    >
      Marked as <strong>Present</strong>
    </td>

    <td
      className={classNames(
        rowNum === 0 ? '' : 'border-t border-transparent',
        'relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium'
      )}
    >
      <Toggle marked={marked} />
    </td>

  </tr>
}

/**
 * AbsenceTable: Componente represening the table itself, will have
 * as a children Rows components
 */
function AbsenceTable({ children }) {
  return (
    <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-6 md:mx-0 md:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
              Name
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Present last session?
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Mark today Absencent
            </th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  )
}

/**
 * Toggle: is the switch that will be used to set a
 * student absente state
 * @marked: if set to false the switch will work
 * and if set to true the state of that switch will be
 * read only
 */
function Toggle({ marked }) {
  const [enabled, setEnabled] = useState(true)
  return (
    <Switch
      checked={enabled}
      onChange={marked ? null : setEnabled}
      className={classNames(
        enabled ? 'bg-[#607D8B]' : 'bg-[#607D8B]/25',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#607D8B]/75 focus:ring-offset-2'
      )}
      style={{
        cursor: marked ? "not-allowed" : "pointer"
      }}
    >
      <span
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      >
        <span
          className={classNames(
            enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
          className={classNames(
            enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      </span>
    </Switch>
  )
}

const GroupsList = {
  Filieres: [
    {
      "id": 1,
      "name": "filier1",
      "specialite": "Technicien Spécialisé",
      "created_at": "2024-06-11T01:23:34.000000Z",
      "updated_at": "2024-06-11T01:23:34.000000Z"
    },
    {
      "id": 2,
      "name": "filier2",
      "specialite": "Technicien Spécialisé",
      "created_at": "2024-06-11T01:23:34.000000Z",
      "updated_at": "2024-06-11T01:23:34.000000Z"
    }],
  Groupes: [
    {
      "id": 1,
      "name": "groupe1-1",
      "code": "M714",
      "annee": "2A",
      "filiere_id": 1,
      "created_at": "2024-06-11T01:23:34.000000Z",
      "updated_at": "2024-06-11T01:23:34.000000Z"
    },
    {
      "id": 2,
      "name": "groupe1-2",
      "code": "M714",
      "annee": "2A",
      "filiere_id": 1,
      "created_at": "2024-06-11T01:23:34.000000Z",
      "updated_at": "2024-06-11T01:23:34.000000Z"
    },
    {
      "id": 3,
      "name": "groupe2-1",
      "code": "M264",
      "annee": "1A",
      "filiere_id": 2,
      "created_at": "2024-06-11T01:23:34.000000Z",
      "updated_at": "2024-06-11T01:23:34.000000Z"
    },
    {
      "id": 4,
      "name": "groupe2-2",
      "code": "M264",
      "annee": "1A",
      "filiere_id": 2,
      "created_at": "2024-06-11T01:23:34.000000Z",
      "updated_at": "2024-06-11T01:23:34.000000Z"
    },
    {
      "id": 5,
      "name": "groupe2-3",
      "code": "M264",
      "annee": "1A",
      "filiere_id": 2,
      "created_at": "2024-06-11T01:23:34.000000Z",
      "updated_at": "2024-06-11T01:23:34.000000Z"
    }
  ]
}

/**
 * SelectGroup - this componenet will be used to set the group mark 
 *  it absente state or previewe its previes absente states if it was
 *  already marked.
 */
const SelectGroup = ({ setGroupeName }) => {
  const [filiere, setFilier] = useState(GroupsList.Filieres[0]?.id);
  const [groupe, setGroupe] = useState(groupsByFiliere(filiere)[0].id);

  function groupsByFiliere(filier_id) {
    return GroupsList.Groupes.filter((g) => g.filiere_id === Number(filier_id));
  }

  function hondleFilierChange(e) {
    setFilier(e.target.value);
    if (groupsByFiliere(e.target.value).length > 0) {
      setGroupe(groupsByFiliere(e.target.value)[0]?.id);
    }
  }

  function setSelectedGroupName() {
    const ChosenGroupe = GroupsList.Groupes.find((g) => g.id === Number(groupe));
    setGroupeName(ChosenGroupe.name);
  }
  return (
    <div>
      <Typography variant="h2" color="blue-gray" className="font-semibold mb-4">
        Choiser le groupe!
      </Typography>
      <div className="mt-10 w-96 items-end justify-center" >
        <div className="sm:col-span-2">
          <Typography variant="h4" color="blue-gray" className="font-semibold mb-4">
            Choiser le filiere
          </Typography>
          <div className="mt-4 mb-5">
            <select
              name="country"
              autoComplete="country-name"
              className="block w-full rounded-md border-0 px-5 py-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset  focus:ring-inset focus:ring-[#607D8B]"
              value={filiere}
              onChange={(e) => hondleFilierChange(e)}
            >
              {GroupsList.Filieres.map((f) => {
                return <option key={f.id} value={f.id}>{f.name}</option>
              })}
            </select>
          </div>
        </div>
        <div>
          <Typography variant="h4" color="blue-gray" className="font-semibold mb-4">
            Choiser le Group
          </Typography>
          <div className="mt-4">
            <select
              name="country"
              autoComplete="country-name"
              className="block w-full rounded-md border-0 px-5 py-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset  focus:ring-inset focus:ring-[#607D8B]"
              value={groupe}
              onChange={(e) => setGroupe(e.target.value)}
            >
              {groupsByFiliere(filiere).map((g) => {
                return <option key={g.id} value={g.id}>{g.name}</option>
              })}
            </select>
          </div>

          <Button color="blue-gray" className="mt-10 w-full" onClick={setSelectedGroupName}>
            Go to table
          </Button>
        </div>
      </div >
    </div>
  );
};

/**
 * Absence: this is the actual page that will be renderd in the absence section
 */
function Absence() {
  const [GroupeName, setGroupeName] = useState(null);

  return <div className="px-4  py-10 sm:px-6 lg:px-8">
    {GroupeName ?
      <>
        <div className="sm:flex sm:text-center lg:text-start sm:items-center">
          <div className="sm:flex-auto ">
            <Typography variant="h2" color="blue-gray" className="font-semibold mb-4">
              Saisie la absence
            </Typography>
            <Typography variant="h6" color="blue-gray" className="font-semibold mb-4">
              Vous marquez désormais les absences du groupe <span className="underline">{GroupeName}</span>.
            </Typography>

          </div>
        </div>
        <AbsenceTable>
          <Row student={student} marked={true} />
          <Row student={student} marked={true} />
          <Row student={student} />
          <Row student={student} />
        </AbsenceTable>
        <div className="mt-4 flex sm:flex-none gap-2 sm:justify-center lg:justify-end">
          <a href="#buttons-with-link">
            <Button variant="text" onClick={() => setGroupeName(null)}> Changer le groupe?</Button>
          </a>
          <Button color="blue-gray">
            Mark absence
          </Button>
        </div>
      </>
      : <SelectGroup setGroupeName={setGroupeName} />
    }
  </div>
}

export default Absence;