import React from "react";
import { useState, useEffect,useContext } from "react";
// import resList from "../utils/mockData"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurentCard, {withVegLabel} from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Banner from "./Banner";

// chucking
//code splitting
//dynamic loading
//lazy loading

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState();
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

 const {loggedInUser,setUserInfo} =useContext(UserContext)

  const RestaurentCardVeg= withVegLabel(RestaurentCard)

  useEffect(() => {
    fetchData();
   
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data_one = await data.json();



    // console.log(data_one?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListOfRestaurant(
      data_one.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      data_one.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };



  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <div>
        <h1>Seems like you are offline please check it </h1>
      </div>
    );
  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
     <Banner/>
      <div className="flex">
     
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 m-4 py-1 rounded-lg bg-blue-300"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toUpperCase().includes(searchText.toUpperCase())
              );
              //setListOfRestaurant(filteredRestaurant)
              setFilteredRestaurant(filteredRestaurant);
              console.log(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
<div className="m-4 p-4 flex items-center">
<button
          className="px-4 py-2 rounded-2xl bg-blue-200"
          onClick={() => {
            console.log("clicked");
            //filter logic need to write here
            let filteredList = filteredRestaurant.filter(
              (resData) => resData?.info?.avgRating >= 4
            );
            // setListOfRestaurant(filteredList);
            setFilteredRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
</div>
       
       <div className="m-4 p-4 flex items-center">
       <label>Username</label>
<input type="text" className="border p-2 border-black" value={loggedInUser} onChange={(e)=>{setUserInfo(e.target.value)}}/>
</div>
      </div>
      <div className="flex flex-wrap">
        {/* when ever you are looping you need to pass a key  */}
        {filteredRestaurant.map((restaurant) => (
          <Link to={"./restaurants/" + restaurant?.info?.id}>
         { restaurant.info.veg ? (<RestaurentCardVeg resData={restaurant} /> ):( <RestaurentCard key={restaurant?.info?.id} resData={restaurant} />)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
