import React from "react";
import { useParams } from "react-router-dom";

const DestinationDetails = () => {
  const { id } = useParams();

  // Mock destination data
  const destination = {
    id: 1,
    name: "Paris, France",
    description:
      "The City of Light, Paris is one of the world's leading tourist destinations, known for its art, culture, fashion, and gastronomy.",
    images: [
      "https://source.unsplash.com/random/1200x800/?paris",
      "https://source.unsplash.com/random/1200x800/?eiffel",
      "https://source.unsplash.com/random/1200x800/?louvre",
    ],
    attractions: [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre-Dame Cathedral",
      "Arc de Triomphe",
    ],
    hotels: [
      {
        id: 1,
        name: "Luxury Hotel Paris",
        price: 299,
        rating: 4.8,
        image: "https://source.unsplash.com/random/800x600/?hotel",
      },
    ],
  };

  return (
    <div className="space-y-12">
      <div className="relative h-[500px]">
        <img
          src={destination.images[0]}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {destination.name}
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              {destination.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-2 gap-4">
            {destination.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${destination.name} view ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Top Attractions</h2>
          <ul className="space-y-3">
            {destination.attractions.map((attraction, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <span className="text-primary">•</span>
                {attraction}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Recommended Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destination.hotels.map((hotel) => (
            <div key={hotel.id} className="card">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
              <div className="flex items-center justify-between mb-4">
                <p className="text-primary font-semibold">
                  ${hotel.price}/night
                </p>
                <p className="text-yellow-500">★ {hotel.rating}</p>
              </div>
              <button className="btn btn-primary w-full">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
