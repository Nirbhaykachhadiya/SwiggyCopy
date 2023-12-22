import React from 'react'
import { Link } from 'react-router-dom'
import { imgURL } from '../utils/Constant'

const Restaurant = ({restaurant}) => {

       
        

  return (
    <>
    {
      restaurant.map((items)=>{
        const[name,locality,costForTwo,avgRating,cloudinaryImageId]=[items.info.name,items.info.locality,items.info.costForTwo,items.info.avgRating,items.info.cloudinaryImageId]
          return(<>
            <Link to={"/restaurant/"+ items.info.id}>
              <div className='restaurant pl-4 pt-4 hover:bg-slate-200' >
                    <div key={items.info.id} className='text-lg font-semibold text-center'>{name}</div>
                    <div><img src= {imgURL.concat(cloudinaryImageId) }  /></div>
                    <div className='text-sm font-semibold text-center'>{locality}</div>
                    <div className='text-sm font-semibold text-center'>{costForTwo}</div>
                    <div className='text-sm font-semibold text-center'>{avgRating}</div>
                  
            
              </div>
            </Link>
            </>)
        })
    }
    
    </>
  )
}

export default Restaurant