import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import {menuUrl} from './Constant'


const imgURL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/"

const Menucard = () => {

    const resid=useParams()
    console.log(resid.resid)

    const [name,setName]=useState()
    const [item,setItem]=useState([])
    const[title,setTitle]=useState()
    

    const fetchData=async()=>{

        const data=await fetch(menuUrl + resid.resid)
        const finalMenu=await data.json()
        console.log()
        setName(finalMenu?.data?.cards[2]?.card?.card?.info)
        setItem(finalMenu?.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.carousel)
        setTitle(finalMenu?.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title)
        

    }

    useEffect(()=>{fetchData()},[])

  return (

    <>
    {name && item?
    <>
    <div className="menu-header">
        <div>{name.name}</div>
        <div>{name.city}</div>
        <div>{name.areaName}</div>
        <div>{name.avgRating}</div>
    </div>
    <div className="menu-body">
        <h1>{title}</h1>
        <div className="menu-card-cont">
        {item.map((items)=>{
            return<>
            <div className='menu-card'>
            <div>{items.dish.info.name}</div>
            <div><img src={imgURL.concat(items.creativeId)}/></div>
            <div>{(items.dish.info.price)/100}Ruppes only</div>
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