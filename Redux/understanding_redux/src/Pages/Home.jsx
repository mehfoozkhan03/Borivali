import React, { useContext, useState } from "react";
// import { Button } from "../Components/Button";
import "../App.css";

import { user } from "../Data/Db.json";
import Card from "../Components/Card";
import { CartContext } from "../Context/ContextCart";

export const Home = () => {
  // const homeStyle = {
  //   padding: ".3rem 1.5rem",
  //   background: "transparent",
  //   border: "2px solid blue",
  //   textTransform: "Capitalize",
  // };

  // const [data, setData] = useState(user ? JSON.parse(user) : []);
  // console.log("🚀 ~ Home ~ data:", data)

  const { count } = useContext(CartContext);
  console.log("🚀 ~ Home ~ count:", count);

  return (
    <div className="home">
      {/*  <button

      
       style={{
         padding: ".3rem 1.5rem",
         background: "transparent",
         border: "2px solid red",
       }}
     >
       home
     </button> */}
      {/* <Button style={homeStyle} name={"home"} /> */}

      {user?.map((el) => (
        <Card props={{ ...el }} />
      ))}
    </div>
  );
};
