import React from 'react'
import { useEffect,useState } from 'react'
import {menuUrl} from '../utils/Constant'



const useRstaurantMenu = (resid) => {


    const [name,setName]=useState()
    const [item,setItem]=useState([])
    const[title,setTitle]=useState()

    
    const fetchData=async()=>{

        const data=await fetch(menuUrl + resid.resid)
        const finalMenu=await data.json()
        setName(finalMenu.data.cards[2].card.card.info)
        setItem(finalMenu.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel)
        setTitle(finalMenu.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title)
        
        console.log(name)
        console.log(item)
        console.log(title)
    }

    useEffect(()=>{fetchData()},[])


  return {name,item,title};
}

export default useRstaurantMenu