import React from 'react'
import { useParams } from 'react-router-dom'
import { menuImgURL } from '../utils/Constant'
import useRstaurantMenu from '../utils/useRstaurantMenu'
import { useState } from 'react'



const Menucard = () => {

    

    const resid=useParams()
    
    const {name,item,title}=useRstaurantMenu(resid);
    console.log(item)


   
    


  return (

    <>
    {name && item ?
    <>
    <div className="menu-header bg-pink-100  pl-96 text-xl font-semibold	">
        <div>{name.name}</div>
        <div>{name.city}</div>
        <div>{name.areaName}</div>
        <div>{name.avgRating}</div>
    </div>

    <div className="menu-body  ">
        <h1 className='text-center '>{title}</h1>
        <div className="menu-card-cont flex flex-wrap ml-32 mt-5">
        {item.map((items)=>{
            return<>
            <div className='menu-card pl-4 pt-4 hover:bg-slate-200 rounded-md' >
            <div className='text-center font-medium text-lg'>{items.dish.info.name}</div>
            <div><img src={menuImgURL.concat(items.creativeId)}/></div>
            <div className='text-center font-semibold' >{(items.dish.info.price)/100}Ruppes only</div>
            </div>
            </>
        })}
        </div>
    </div>
    
  
    </>:"loading"}

    </> 
    
  )
}

export default Menucard
/*
    <>*/

     /* && item
    */