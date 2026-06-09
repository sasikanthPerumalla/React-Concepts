import { REST_CARD_IMAGE_URL } from "../utils/references";

const RestaurantCard = ({ resData }) => {
  const {
    id,
    name,
    cloudinaryImageId,
    locality,
    areaName,
    cuisines,
    avgRating,
    costForTwo,
  } = resData;
  return (
    <div className="restaurant-card">
      <img
        src={REST_CARD_IMAGE_URL + cloudinaryImageId}
        alt={name}
        className="restaurant-image"
      />
      <h3>{name}</h3>
      <h3>Rating: {avgRating} Stars</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>
        {locality}, {areaName}
      </h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

export default RestaurantCard;
