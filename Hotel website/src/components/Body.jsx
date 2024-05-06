import  { useEffect, useState } from 'react'
import Card from './Card'
// import restaurantList from '../utili/Data'
import Shimmercards from './Shimmercards'
import {Link} from 'react-router-dom'
import useOnlineStatus from '../utili/useOnlineStatus'
import offlineimg from '../image/offlineimg.jpeg'

const Body = () => {
  const [listofres,setlistofres]=useState([])
  const [searchinput,setsearchinput]=useState('')
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(()=>{
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
      const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
   
      const jsons = await data.json()

      setlistofres(jsons?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
    }

    fetchdata();
  }, [latitude, longitude]);

    const onlinestatus=useOnlineStatus()

    if(onlinestatus===false){
      return <div className='w-full h-full object-cover'>
        <img src={offlineimg} alt='offline-img' />
      </div>
    }

  
  if((!listofres || listofres.length===0) && onlinestatus===true){
    return <Shimmercards/>
  }

  
  return ( 
    <div className='boby'>
        
      <div className=' text-center p-5 '>

        <div className=' flex items-center justify-center p-2 text-center'>
              <input className='rounded-md h-11 w-[350px] text-center border border-black' type='text' placeholder='Search here for your delicious food ' value={searchinput} onChange={(e)=>{
                setsearchinput(e.target.value)
              }}/>

              <button className='mx-4 p-3 bg-black text-white rounded-md hover:bg-gray-500'
              onClick={()=>{
                const searchedlist = listofres.filter((res)=>{
                  return res?.info?.name?.toLowerCase()?.includes(searchinput?.toLowerCase());  
                });
                setlistofres(searchedlist);
              }}>Search</button>

        </div>


           {/* <button  onClick={()=>{
            const filteredlist=listofres.filter((restaurant)=>restaurant.info.avgRating>4)
            setlistofres(filteredlist)
            console.log(filteredlist);          
          }}>Top Rated </button> */}
      </div>

      <div className='card-container grid sm:gird-col-2 grid-cols-4 lg:grid-cols-4 md:grid-flow-col-3  gap-4 p-10 m-4'>
        {listofres?.map((restaurant) => {
          return(
            <Link key={restaurant.info.id} to={'/restaurant/'+restaurant.info.id}>
              <Card  {...restaurant?.info} />
            </Link>
          )
        })} 
      </div>

    </div>
  )

}

export default Body