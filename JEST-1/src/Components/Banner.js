import React, { useEffect, useState } from 'react'
import { CDN_URL, MENU_URL } from '../utils/constants';
import BannerCard from './BannerCard';

const Banner = () => {
const [banner,setBanner]=useState([])

console.log("banner:",banner)

useEffect(() => {
    fetchData();
   
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data_one = await data.json();
    setBanner(
      data_one.data.cards[0]?.card?.card?.imageGridCards?.info
    );
   
  };
  const url=CDN_URL

if  (banner===null) return <p>Loading</p>

// const out= banner?.data.cards[0].card.card.imageGridCards.info
// console.log(out)
  return (
    <div className='flex flex-wrap '>
      {
        banner.map(each=> <BannerCard data={each}/>)
      }
       
        
    </div>
  )
}

export default Banner