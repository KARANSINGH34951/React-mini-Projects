import React, { useEffect, useState } from 'react';
import Card from './Card';
import Shimmercards from './Shimmercards';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utili/useOnlineStatus';
import offlineimg from '../image/offlineimg.jpeg';


const Body = () => {
  const [listofres, setlistofres] = useState([]);
  const [searchinput, setsearchinput] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }

    async function fetchdata() {
      if (latitude && longitude) {
        try {
          const response = await fetch(
            `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
          );
          const json = await response.json();
          setlistofres(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }

    fetchdata();
  }, [latitude, longitude]);

  const onlinestatus = useOnlineStatus();

  if (onlinestatus === false) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <img src={offlineimg} alt="offline-img" className="object-cover w-full h-full" />
      </div>
    );
  }

  if ((!listofres || listofres.length === 0) && onlinestatus === true) {
    return <Shimmercards />;
  }

  return (
    <div className="body">


      <div className="text-center p-5">
        <div className="flex flex-col sm:flex-row items-center justify-center p-2 text-center">
          <input
            className="rounded-md h-11 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-center border border-black mb-4 sm:mb-0"
            type="text"
            placeholder="Search here for your delicious food"
            value={searchinput}
            onChange={(e) => {
              setsearchinput(e.target.value);
            }}
          />
          <button
            className="mx-4 p-3 bg-black text-white rounded-md hover:bg-gray-500"
            onClick={() => {
              const searchedlist = listofres.filter((res) => {
                return res?.info?.name?.toLowerCase()?.includes(searchinput?.toLowerCase());
              });
              setlistofres(searchedlist);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-6 p-4 sm:p-5 md:p-4 lg:p-4 m-2">
        {listofres.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
            <Card {...restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
