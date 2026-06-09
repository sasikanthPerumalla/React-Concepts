import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./Loading";
import { RESTAURANT_LIST_URL } from "../utils/references";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const respData = await fetch(`${RESTAURANT_LIST_URL}`);
    const jsonData = await respData.json();
    setRestList(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
    );
    setFilteredList(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
    );
  };

  if (restList.length === 0) {
    <Loading />;
  }

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() =>
            setFilteredList(
              restList.filter((r) =>
                r.info.name.toLowerCase().includes(searchText.toLowerCase()),
              ),
            )
          }
        >
          Search
        </button>
        <button
          className="top-rated-btn"
          onClick={() =>
            setFilteredList(restList.filter((r) => r.info.avgRating > 4))
          }
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
