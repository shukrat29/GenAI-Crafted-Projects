import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { hotelId } = useParams();
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    rooms: 1,
    specialRequests: "",
  });

  // Mock hotel data
  const hotel = {
    id: 1,
    name: "Luxury Hotel Paris",
    price: 299,
    rating: 4.8,
    image: "https://source.unsplash.com/random/800x600/?hotel",
    amenities: ["WiFi", "Pool", "Spa", "Restaurant"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    console.log("Booking submitted:", bookingData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h2 className="text-2xl font-bold mb-4">{hotel.name}</h2>
          <div className="flex items-center gap-4 mb-6">
            <p className="text-primary text-xl font-semibold">
              ${hotel.price}/night
            </p>
            <p className="text-yellow-500">★ {hotel.rating}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Amenities</h3>
            <ul className="grid grid-cols-2 gap-2">
              {hotel.amenities.map((amenity, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="text-primary">✓</span>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Make a Reservation</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Check-in Date
              </label>
              <input
                type="date"
                name="checkIn"
                value={bookingData.checkIn}
                onChange={handleChange}
                required
                className="input"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Check-out Date
              </label>
              <input
                type="date"
                name="checkOut"
                value={bookingData.checkOut}
                onChange={handleChange}
                required
                className="input"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Guests
              </label>
              <select
                name="guests"
                value={bookingData.guests}
                onChange={handleChange}
                required
                className="input"
              >
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num} Guest{num > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Rooms
              </label>
              <select
                name="rooms"
                value={bookingData.rooms}
                onChange={handleChange}
                required
                className="input"
              >
                {[1, 2, 3].map((num) => (
                  <option key={num} value={num}>
                    {num} Room{num > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Special Requests
              </label>
              <textarea
                name="specialRequests"
                value={bookingData.specialRequests}
                onChange={handleChange}
                placeholder="Any special requests or requirements?"
                className="input h-32 resize-none"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
