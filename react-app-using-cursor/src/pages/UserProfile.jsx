import React, { useState } from "react";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 8900",
    address: "123 Main St, City, Country",
    bookings: [
      {
        id: 1,
        hotel: "Luxury Hotel Paris",
        location: "Paris, France",
        checkIn: "2024-04-01",
        checkOut: "2024-04-05",
        status: "confirmed",
        price: 1196,
      },
    ],
    preferences: {
      notifications: true,
      newsletter: true,
      language: "English",
    },
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">My Profile</h1>
        <div className="flex space-x-4 border-b">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "profile"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "bookings"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("bookings")}
          >
            My Bookings
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "preferences"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("preferences")}
          >
            Preferences
          </button>
        </div>
      </div>

      <div className="card">
        {activeTab === "profile" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <p className="text-gray-900">{user.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <p className="text-gray-900">{user.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <p className="text-gray-900">{user.phone}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <p className="text-gray-900">{user.address}</p>
            </div>
            <button className="btn btn-primary">Edit Profile</button>
          </div>
        )}

        {activeTab === "bookings" && (
          <div className="space-y-6">
            {user.bookings.map((booking) => (
              <div
                key={booking.id}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {booking.hotel}
                    </h3>
                    <p className="text-gray-600 mb-2">{booking.location}</p>
                    <div className="space-y-1 text-gray-600">
                      <p>Check-in: {booking.checkIn}</p>
                      <p>Check-out: {booking.checkOut}</p>
                      <p className="text-primary font-semibold">
                        Total: ${booking.price}
                      </p>
                    </div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                        booking.status === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="btn btn-secondary">View Details</button>
                    <button className="btn btn-secondary">Cancel</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "preferences" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={user.preferences.notifications}
                  className="rounded text-primary focus:ring-primary"
                />
                Email Notifications
              </label>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={user.preferences.newsletter}
                  className="rounded text-primary focus:ring-primary"
                />
                Newsletter Subscription
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Language
              </label>
              <select
                defaultValue={user.preferences.language}
                className="input"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select>
            </div>
            <button className="btn btn-primary">Save Preferences</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
