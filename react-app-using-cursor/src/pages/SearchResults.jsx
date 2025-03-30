import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [priceFilter, setPriceFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");

  // Mock search results
  const searchResults = [
    {
      id: 1,
      name: "Luxury Hotel Paris",
      location: "Paris, France",
      price: 299,
      rating: 4.8,
      image: "https://source.unsplash.com/random/800x600/?hotel",
      description: "Beautiful luxury hotel in the heart of Paris",
    },
    // Add more mock results as needed
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-64 space-y-6">
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Filters</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Price Range</h4>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="input"
              >
                <option value="all">All Prices</option>
                <option value="budget">Budget ($0-$100)</option>
                <option value="mid">Mid-Range ($100-$300)</option>
                <option value="luxury">Luxury ($300+)</option>
              </select>
            </div>
            <div>
              <h4 className="font-medium mb-2">Rating</h4>
              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="input"
              >
                <option value="all">All Ratings</option>
                <option value="4">4+ Stars</option>
                <option value="3">3+ Stars</option>
                <option value="2">2+ Stars</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">
            Search Results for "{searchParams.get("q")}"
          </h2>
          <p className="text-gray-600">{searchResults.length} results found</p>
        </div>

        <div className="space-y-6">
          {searchResults.map((result) => (
            <div key={result.id} className="card">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={result.image}
                  alt={result.name}
                  className="w-full md:w-64 h-48 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{result.name}</h3>
                  <p className="text-gray-600 mb-2">{result.location}</p>
                  <div className="flex items-center gap-4 mb-4">
                    <p className="text-primary font-semibold">
                      ${result.price}/night
                    </p>
                    <p className="text-yellow-500">★ {result.rating}</p>
                  </div>
                  <p className="text-gray-700 mb-4">{result.description}</p>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
