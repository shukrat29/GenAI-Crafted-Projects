import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const HotelCard = ({
  id,
  name,
  location,
  price,
  rating,
  image,
  description,
  amenities = [],
  className = "",
}) => {
  return (
    <Card className={className} hover>
      <div className="flex flex-col h-full">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-2">{location}</p>
          <div className="flex items-center justify-between mb-4">
            <p className="text-primary font-semibold">${price}/night</p>
            <p className="text-yellow-500">★ {rating}</p>
          </div>
          {description && (
            <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>
          )}
          {amenities.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Amenities
              </h4>
              <div className="flex flex-wrap gap-2">
                {amenities.slice(0, 3).map((amenity, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {amenity}
                  </span>
                ))}
                {amenities.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    +{amenities.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
          <Link to={`/booking/${id}`} className="block w-full text-center">
            <button className="btn btn-primary w-full">Book Now</button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default HotelCard;
