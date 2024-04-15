import React from 'react'
import { CDN_URL } from '../utils/constants'

const BannerCard = (props) => {

  const {imageId}= props.data


  return (
    <div>
         <img className='w-96  rounded-2xl p-4 m-4 h-64' src={CDN_URL+imageId}/> 
    </div>
  )
}

export default BannerCard