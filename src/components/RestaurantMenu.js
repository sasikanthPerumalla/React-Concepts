import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/references";

const RestaurantMenu = (resData) => {
  const { name, cuisines, avgRating } = resData;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const respData = await fetch(`${MENU_URL}`);
    // const jsonData = await respData.json();
    console.log(respData);
  };

  return (
    <div>
      <h1>Restaurant Menu</h1>
      <p>Here is the restaurant menu.</p>
    </div>
  );
};

export default RestaurantMenu;
