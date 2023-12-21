import React from 'react'
import { Link } from 'react-router-dom'

const Restaurant = ({restaurant}) => {

        //const {}=restaurant
        const imgURL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"

  return (
    <>
    {
        restaurant.map((items)=>{
            const[name,locality,costForTwo,avgRating,cloudinaryImageId]=[items.info.name,items.info.locality,items.info.costForTwo,items.info.avgRating,items.info.cloudinaryImageId]
        return<>
                <Link to={"/restaurant/"+ items.info.id}>
                <div className='restaurant' >
                    <div key={items.info.id}>{name}</div>
                    <div><img src= {imgURL.concat(cloudinaryImageId) }  /></div>
                    <div>{locality}</div>
                    <div>{costForTwo}</div>
                    <div>{avgRating}</div>
                  
            
                 </div>
                 </Link>
            </>
        })
    }
    
    </>
  )
}

export default Restaurant