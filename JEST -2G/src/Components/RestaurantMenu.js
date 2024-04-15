import React, { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategeory from "./RestaurantCategeory";

const RestaurantMenu = () => {

  const data="DummyData"

  const { resId } = useParams();

  const [showIndex,setShowIndex]=useState(null)

  //resInfo has single responsiblity that means it is bother about fetching data

  const resInfo = useRestaurantMenu(resId);

 

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
    resInfo?.data.cards[0]?.card?.card?.info;


  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <h2 className="font-bold">{cuisines.join(",")}</h2>
      <p className="font-bold">
        {"cost for two : "}
        {costForTwo / 100}
      </p>
      {categories.map((category,index) => (
        <RestaurantCategeory
          key={category.card.card.title}
          data={category.card.card}
          // showItem={index===1 ? true: false }
          showItem={index===showIndex? true:false}
          setShowIndex={()=>setShowIndex(index)}
          dummy={data}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
