import React, { useEffect } from 'react';
const GoogleMap = () => {
  useEffect(() => {
  
    if (window.google && window.google.maps) {
      
      new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 10,
      });
    } else {
      
      console.error('Google Maps not available.');
    }
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '80%', height: '200px' }}></div>
    </div>
  );
};

export default GoogleMap;