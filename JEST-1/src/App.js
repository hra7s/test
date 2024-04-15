import React,{lazy, Suspense, useEffect,useState} from 'react';

import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import Menu from './Components/Menu';
//import About from './Components/About';
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import '../index.css'
import Contact from './Components/Contact';
import Error from './Components/Error';
import RestaurantMenu from './Components/RestaurantMenu';
import RestaurentCard from './Components/RestaurantCard';
import UserContext from './utils/UserContext';
import Cart from './Components/Cart';

import {Provider} from "react-redux"
import appStore from './utils/store/appStore';
//import Grocery from './Components/Grocery'


//chuncking 
//code splitting
// dynamic loading 
// 
// // 
const Grocery=lazy(()=> import("./Components/Grocery.js"));

const About=lazy(()=> import("./Components/About.js"));

const App= ()=>{
  

    const [userInfo, setUserInfo]=useState()

    useEffect(()=>{

        const data={
            name:"welcome Phani"
        }

        setUserInfo(data.name)

    },[])



    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userInfo, setUserInfo}}>
              <div className="app">
              <UserContext.Provider value={{loggedInUser: userInfo}}>
              <Header />
              </UserContext.Provider>
        
        <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
      
    )
}
 const appRouter= createBrowserRouter([
   {
        path:'/',
        element : <App />,
        children:[
            {
                path:'/',
                element : <Body/>
            },
            {
                path:'/about',
                //element : <About/>
                element:<Suspense fallback={<h1>Loading...hi .</h1>}><About/></Suspense>
            },
            {
                path:'/contact',
                element : <Contact/>
            },
            {
                path:"/grocery",
                //element:<Grocery/>,
                 element:<Suspense fallback={<h1>Loading..hi..</h1>}><Grocery/></Suspense> 
            },
            {
                path:"/restaurants/:resId",
                element :<RestaurantMenu/>
            },{
                path:"/cart",
                element: <Cart />
            }
        ],
        errorElement : <Error />
    },
   


])
 export default App


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

