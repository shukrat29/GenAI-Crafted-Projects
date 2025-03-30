import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const featuredDestinations = [
    {
      id: 1,
      name: "Paris, France",
      image: "https://source.unsplash.com/random/800x600/?paris",
    },
    {
      id: 2,
      name: "Bali, Indonesia",
      image: "https://source.unsplash.com/random/800x600/?bali",
    },
    {
      id: 3,
      name: "New York, USA",
      image: "https://source.unsplash.com/random/800x600/?newyork",
    },
    {
      id: 4,
      name: "Tokyo, Japan",
      image: "https://source.unsplash.com/random/800x600/?tokyo",
    },
  ];

  return (
    <div className="space-y-12">
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://source.unsplash.com/random/1920x1080/?travel"
            alt="Travel background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Find Your Next Adventure</h1>
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="input"
              />
              <input type="date" className="input" />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDestinations.map((destination) => (
            <Link
              to={`/destination/${destination.id}`}
              key={destination.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                {destination.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
