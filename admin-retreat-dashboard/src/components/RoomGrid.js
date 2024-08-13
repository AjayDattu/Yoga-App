import React, { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import Aos from 'aos';
const roomsData = [
  {
    "type": "deluxe",
    "description": "A deluxe room with a beautiful view and modern amenities.",
    "price": 150,
    "shared": false,
    "amenities": ["WiFi", "Air Conditioning", "Room Service"],
    "images": ["deluxe1.jpg", "deluxe2.jpg"],
    "retreatcenter": "64b0e9c4972efc4f3a67bde0"
  },
  {
    "type": "deluxe",
    "description": "Spacious deluxe accommodation with a king-sized bed.",
    "price": 180,
    "shared": false,
    "amenities": ["WiFi", "Mini Bar", "Television"],
    "images": ["deluxe3.jpg", "deluxe4.jpg"],
    "retreatcenter": "64b0e9c4972efc4f3a67bde1"
  },
  {
    "type": "deluxe",
    "description": "Deluxe room with a balcony and garden view.",
    "price": 170,
    "shared": false,
    "amenities": ["WiFi", "Coffee Maker", "Balcony"],
    "images": ["deluxe5.jpg", "deluxe6.jpg"],
    "retreatcenter": "64b0e9c4972efc4f3a67bde2"
  },
  {
    "type": "luxury",
    "description": "Luxury suite with private pool and personal butler service.",
    "price": 500,
    "shared": false,
    "amenities": ["WiFi", "Private Pool", "Butler Service"],
    "images": ["luxury1.jpg", "luxury2.jpg"],
    "retreatcenter": "64b0e9c4972efc4f3a67bde3"
  },
  {
    "type": "luxury",
    "description": "Luxury villa with panoramic ocean views.",
    "price": 600,
    "shared": false,
    "amenities": ["WiFi", "Ocean View", "Jacuzzi"],
    "images": ["luxury3.jpg", "luxury4.jpg"],
    "retreatcenter": "64b0e9c4972efc4f3a67bde4"
  },
  {
    "type": "luxury",
    "description": "Luxurious penthouse suite with rooftop access.",
    "price": 700,
    "shared": false,
    "amenities": ["WiFi", "Rooftop Access", "Private Gym"],
    "images": ["luxury5.jpg", "luxury6.jpg"],
    "retreatcenter": "64b0e9c4972efc4f3a67bde5"
  },
  {
    "type": "luxury",
    "description": "Exclusive luxury cabin in the woods with a private hot tub.",
    "price": 650,
    "shared": false,
    "amenities": ["WiFi", "Hot Tub", "Fireplace"],
    "images": ["luxury7.jpg", "luxury8.jpg"],
    "retreatcenter": "64b0e9c4972efc4f3a67bde6"
  },
  {
    "type": "luxury",
    "description": "Luxury apartment with skyline views and modern decor.",
    "price": 550,
    "shared": false,
    "amenities": ["WiFi", "Skyline Views", "Home Theater"],
    "images": ["luxury9.jpg", "luxury10.jpg"],
    "retreatcenter": "64b0e9c4972efc4f3a67bde7"
  },
  {
    "type": "normal",
    "description": "Comfortable standard room with basic amenities.",
    "price": 80,
    "shared": true,
    "amenities": ["WiFi", "Air Conditioning", "Television"],
    "images": ["normal1.jpg", "normal2.jpg"],
    "retreatcenter": "64b0e9c4972efc4f3a67bde8"
  },
  {
    "type": "normal",
    "description": "Standard room with shared bathroom facilities.",
    "price": 70,
    "shared": true,
    "amenities": ["WiFi", "Shared Bathroom", "Fan"],
    "images": ["normal3.jpg", "normal4.jpg"],
    "retreatcenter": "64b0e9c4972efc4f3a67bde9"
  },
  {
    "type": "normal",
    "description": "Cozy room with garden access and basic comforts.",
    "price": 90,
    "shared": true,
    "amenities": ["WiFi", "Garden Access", "Ceiling Fan"],
    "images": ["normal5.jpg", "normal6.jpg"],
    "retreatcenter": "64b0e9c4972efc4f3a67bdea"
  },
  {
    "type": "normal",
    "description": "Standard room with easy access to local attractions.",
    "price": 85,
    "shared": true,
    "amenities": ["WiFi", "Local Guides", "Television"],
    "images": ["normal7.jpg", "normal8.jpg"],
    "retreatcenter": "64b0e9c4972efc4f3a67bdeb"
  },
  {
    "type": "deluxe",
    "description": "Deluxe suite with a mountain view and modern facilities.",
    "price": 200,
    "shared": false,
    "amenities": ["WiFi", "Mountain View", "Mini Bar"],
    "images": ["deluxe7.jpg", "deluxe8.jpg"],
    "retreatcenter": "64b0e9c4972efc4f3a67bdec"
  },
  {
    "type": "luxury",
    "description": "Luxury room with designer furniture and high-end amenities.",
    "price": 750,
    "shared": false,
    "amenities": ["WiFi", "Designer Furniture", "Spa Access"],
    "images": ["luxury11.jpg", "luxury12.jpg"],
    "retreatcenter": "64b0e9c4972efc4f3a67bded"
  },
  {
    "type": "normal",
    "description": "Economical room with essential amenities for a budget stay.",
    "price": 60,
    "shared": true,
    "amenities": ["WiFi", "Fan", "Desk"],
    "images": ["normal9.jpg", "normal10.jpg"],
    "retreatcenter": "64b0e9c4972efc4f3a67bdee"
  }

  // (Include the rest of the room objects here)
];
const RoomGrid = () => {
  const [selectedType, setSelectedType] = useState("all");
  useEffect(()=>{
        Aos.init({duration:2000});
    },[])
  const filteredRooms =
    selectedType === "all"
      ? roomsData
      : roomsData.filter((room) => room.type === selectedType);

  return (
    <div className="p-4 flex-col gap-2">
      <div className="flex justify-center mb-4 gap-3">
        {["all", "deluxe", "luxury", "normal"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 ${
              selectedType === type
                ? "text-white bg-teal-600"
                : "text-teal-800 bg-teal-200"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map((room, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"

            data-aos="fadein"
          >
            <img
              src={room.images[0]}
              alt={room.type}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{room.description}</h3>
              <p className="text-gray-600">Price: ${room.price}/night</p>
              <p className="text-gray-600">
                Shared: {room.shared ? "Yes" : "No"}
              </p>
              <p className="text-gray-600">
                Amenities: {room.amenities.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomGrid;