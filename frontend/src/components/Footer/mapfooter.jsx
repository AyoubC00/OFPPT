import React, { useEffect } from 'react';
import map from "../../assets/map.jpg"
const GoogleMap = () => {
//   useEffect(() => {
  
//     if (window.google && window.google.maps) {
      
//       new window.google.maps.Map(document.getElementById('map'), {
//         center: { lat: 37.7749, lng: -122.4194 },
//         zoom: 10,
//       });
//     } else {
      
//       console.error('Google Maps not available.');
//     }
//   }, []);

  return (
    <div className="min-w-full">
      {/* <div id="map" className="w-full h-[15rem]"></div> */}
      <img src={ map } alt="location" />
    </div>
  );
};

export default GoogleMap;