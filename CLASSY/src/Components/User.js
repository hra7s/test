// import React from 'react'

// const User = () => {
//   return (
//     <div className="border-2 border-red-400 p-4 m-4 text-center">
//         <h1>I am Phani</h1>
//         <h2>Location : Delhi</h2>
//         <h3>Contact : phani@yahoo.com</h3>
//     </div>
//   )
// }

// export default User
import { useState ,useEffect} from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // Api Calls
  }, []);

  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name: "phani"</h2>
      <h3>Location: Delhi</h3>
      <h4>Contact: @phanik</h4>
    </div>
  );
};

export default User;