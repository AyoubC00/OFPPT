// eslint-disable-next-line no-unused-vars
import React from 'react';
import { GrCertificate } from "react-icons/gr";
// import { LiaCertificateSolid } from "react-icons/lia";
import { GiDiploma } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { RiBankCardLine } from "react-icons/ri";


const MyComponent = () => {
    const tableData = [
        { id: 1, type: 'Type 1', cef: 'CEF 1', fullName: 'name1', date: '2024-03-22', status: 'Active', action: 'Edit' },
        { id: 2, type: 'Type 2', cef: 'CEF 2', fullName: 'name2', date: '2024-03-21', status: 'Active', action: 'Edit' },
    ];
return (
    <div className='bg-gray-200 flex flex-col items-center justify-center min-h-screen'>
    <div className="flex gap-4 mb-8">
        <button className='grid place-items-center text-lg font-bold bg-gray-50 text-sky-300 p-5 rounded-lg shadow-md border border-transparent cursor-pointer transition-transform duration-500 size-40 hover:shadow-inner hover:inset-x-2 hover:inset-y-2 hover:border-gray-200 hover:translate-y-1'>
        <GrCertificate className='text-sky-300 size-20'/>
        Attestation scolaire
        </button>
        <button className='grid place-items-center text-lg font-bold bg-gray-50 text-sky-300 p-5 rounded-lg shadow-md border border-transparent cursor-pointer transition-transform duration-500 size-40 hover:shadow-inner hover:inset-x-2 hover:inset-y-2 hover:border-gray-200 hover:translate-y-1'>
        <GiDiploma className='text-sky-300 size-20'/>
        Baccalauréat
        </button>
        <button className='grid place-items-center text-lg font-bold bg-gray-50 text-sky-300 p-5 rounded-lg shadow-md border border-transparent cursor-pointer transition-transform duration-500 size-40 hover:shadow-inner hover:inset-x-2 hover:inset-y-2 hover:border-gray-200 hover:translate-y-1'>
        <RiBankCardLine className='text-sky-300 size-20'/>
        RIB
        </button>
        <button className='grid place-items-center text-lg font-bold bg-gray-50 text-sky-300 p-5 rounded-lg shadow-md border border-transparent cursor-pointer transition-transform duration-500 size-40 hover:shadow-inner hover:inset-x-2 hover:inset-y-2 hover:border-gray-200 hover:translate-y-1'>
        <FaPlus className='text-sky-300 size-20'/>
        Autre
        </button>
    </div>
    <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
        <thead>
            <tr className='text-center bg-sky-300'>
            <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">ID</th>
            <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Type</th>
            <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">CEF</th>
            <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Full Name</th>
            <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Date</th>
            <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Status</th>
            <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4">Action</th>
            </tr>
        </thead>
        <tbody>
        {tableData.map(row => (
            <tr key={row.id}>
                <td className="border border-gray-400 px-4 py-2 text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{row.id}</td>
                <td className="border border-gray-400 px-4 py-2 text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{row.type}</td>
                <td className="border border-gray-400 px-4 py-2 text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{row.cef}</td>
                <td className="border border-gray-400 px-4 py-2 text-dark border-b border-r border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{row.fullName}</td>
                <td className="border border-gray-400 px-4 py-2 text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{row.date}</td>
                <td className="border border-gray-400 px-4 py-2 text-dark border-b border-r border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{row.status}</td>
                <td className="border border-gray-400 px-4 py-2 text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">{row.action}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>
);
};

export default MyComponent;