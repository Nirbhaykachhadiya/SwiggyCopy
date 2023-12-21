import React from 'react'
import {useEffect,useState} from 'react'
import Restaurant from './Restaurant';

const HomeBody = () => {

    const [restaurant,setRestaurant]=useState([])


    const fetchData=async()=>{
  
      try{
        const data =await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=23.0224734&lng=72.5715931" );
        const jsonData= await data.json();
        const finalImpData=jsonData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
        console.log(finalImpData)
        setRestaurant(finalImpData)
          }catch(e){
        console.log(e)
          }
    
    }
  
    useEffect(()=>{fetchData()},[])
  



  return (<>
   {restaurant.length!=0?<div className='main-Rest'><Restaurant restaurant={restaurant}/></div>:"Loading"}
</>
  )
}

export default HomeBody