import React, { useEffect, useState } from 'react';
import Body from './Body'

 
  const Locations = () => {
    let lon, lat;
    useEffect(() => {
      
    }, []);

    return (
      <div>
        <Body lon={lon} lat={lat} />
      </div>
    );
  };

export default Locations