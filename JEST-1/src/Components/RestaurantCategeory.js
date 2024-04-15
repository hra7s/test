import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategeory = ({data,showItem,setShowIndex,dummy}) => {
  // const [showItem,setShowItems]= useState(false)
 const handleItems=()=>{
  setShowIndex()
  // setShowItems(true)
  // setShowItems(!showItem)
  // console.log("clicked")
 }
  return (
  
    <div className='w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4 '>
    <div className='flex justify-between  cursor-pointer' onClick={handleItems}>
    <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
        <span>⬇️ </span>
    </div>
        
        {showItem && <ItemList items={data.itemCards} dummy={dummy}/>}
      </div>
       
 
  )
}

export default RestaurantCategeory