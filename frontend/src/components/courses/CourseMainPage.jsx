import React, { useState, useEffect } from 'react';
import { Course } from './course';
import axios from 'axios';

export const CourseMainPage = () => {
 const [data, setData] = useState([]);

 useEffect(() => {
    axios.get("https://65fa59d33909a9a65b1a3e51.mockapi.io/cours")
      .then(response => setData(response.data))
      .catch(err => console.error(err));
 }, []);

 useEffect(() => {
    console.log(data);
 }, [data]);

 return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">my courses</h1>
      <hr className="h-1 bg-blue-gray-600 my-4"/>
      {
        data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {data.map((course) => (
              <Course key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center">No data found</div>
        )
      }
    </div>
 );
};
