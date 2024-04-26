import React, { useEffect, useState } from 'react'
import Card from './Card'
import restaurantList from '../utili/Data'

const Body = () => {
  const [listofres,setlistofres]=useState(restaurantList)

  useEffect(()=>{
    console.log("render");
  },[])

  const API = fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
 


  // const [listofres,setlistofre]=useState(
  //   [
  //   {
  //         type: "restaurant",
  //         data: {
  //           type: "F",
  //           id: "74453",
  //           name: "KFC",
  //           uuid:  "87727dbd-7f2b-4857-9763-359624165845",
  //           city: "21",
  //           area: "Athwa",
  //           totalRatingsString: "1000+ ratings",
  //           cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //           cuisines: ["Pizzas"],
  //           costForTwoString: "₹200 FOR TWO",
  //           deliveryTime: 31,
  //           minDeliveryTime: 30,
  //           maxDeliveryTime: 40,
  //     }},
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "74453",
  //         name: "KFC",
  //         uuid:  "87727dbd-7f2b-4857-9763-359624165845",
  //         city: "21",
  //         area: "Athwa",
  //         totalRatingsString: "1000+ ratings",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Pizzas"],
  //         costForTwoString: "₹200 FOR TWO",
  //         deliveryTime: 31,
  //         minDeliveryTime: 30,
  //         maxDeliveryTime: 40,
  //     },
  //     }, 
  // ]
// )

//   let listofres=[

//     },
//     {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "74454",
//       name: "DOMINOS",
//       uuid: "87727dbd-7f2b-4857-9763-359624165845",
//       city: "21",
//       area: "Athwa",
//       totalRatingsString: "1000+ ratings",
//       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
//       cuisines: ["Pizzas"],
//       costForTwoString: "₹200 FOR TWO",
//       deliveryTime: 31,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 40,
//   },
//     },
//     {
//       type: "restaurant",
//       data: {
//         type: "F",
//         id: "74456",
//         name: "Yellow Cafe",
//         uuid: "87727dbd-7f2b-4857-9763-359624165845",
//         city: "21",
//         area: "Athwa",
//         totalRatingsString: "1000+ ratings",
//         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
//         cuisines: ["Pizzas"],
//         costForTwoString: "₹200 FOR TWO",
//         deliveryTime: 31,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 40,
//     },
//     },
//     {
//       type: "restaurant",
//       data: {
//         type: "F",
//         id: "74456",
//         name: "Green Cafe",
//         uuid: "87727dbd-7f2b-4857-9763-359624165845",
//         city: "21",
//         area: "Athwa",
//         totalRatingsString: "1000+ ratings",
//         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
//         cuisines: ["Pizzas"],
//         costForTwoString: "₹200 FOR TWO",
//         deliveryTime: 31,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 40,
//     },
//     },
// ]


  const [count,setcount]=useState()
  return (
    <div className='boby'>

      <div className='filter'>
          <button className='filter-btn' onClick={()=>{
            const filteredlist=listofres.filter((restaurant)=>restaurant.data.avgRating>4)
            setlistofres(filteredlist)
            console.log(filteredlist);          
          }}>Top Rated </button>
      </div>

      <div className='card-container'>
        {listofres.map((restaurant) => {
          return <Card key={restaurant.data.id} {...restaurant.data} />;
        })}    
      </div>

    </div>
  )
}

export default Body
