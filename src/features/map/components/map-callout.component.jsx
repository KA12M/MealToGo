import React from "react"; 
import { CompactRestaurantInfo } from "../../../components/restaurants/compact-restaurant-info.restaurants"; 

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
