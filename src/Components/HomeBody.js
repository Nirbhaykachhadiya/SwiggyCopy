import React from 'react'
import {useEffect,useState} from 'react'
import Restaurant from './Restaurant';

import useHomeRestaurant from '../utils/useHomeRestaurant';

const HomeBody = () => {

    
    const restaurant=useHomeRestaurant()


    

  return (
    <>
   {restaurant.length!=0?<div className='main-Rest flex flex-wrap mt-5 ml-10'>
    <Restaurant restaurant={restaurant}/></div>:"Loading"}
    </>
  )
}

export default HomeBody