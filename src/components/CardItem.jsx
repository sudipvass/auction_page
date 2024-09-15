import React, { useState, useContext } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PropertyContext } from "../context/PropertyContext";
import { IoTimeOutline } from "react-icons/io5";

const CardItem = ({ item, countdownTime }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { selectProperty } = useContext(PropertyContext);
  const navigate = useNavigate();

  const handleCardClick = () => {
    selectProperty(item);
    navigate(`/card-details/${item.id}`);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === item.landImg.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? item.landImg.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative bg-white shadow-md rounded-lg overflow-hidden cursor-pointer flex flex-col h-full"
    >
      {/* Image Slider */}
      <div className="relative group h-56 overflow-hidden">
        <img
          src={item.landImg[currentIndex]}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          alt="property"
        />
        {/* Countdown Timer at the base of the image slider */}
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
          {countdownTime}
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
          {item.landImg.map((_, index) => (
            <span
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handlePrevImage();
              }}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Previous and Next Arrows */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handlePrevImage();
          }}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow hidden group-hover:block z-20"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleNextImage();
          }}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow hidden group-hover:block z-20"
        >
          <FaAngleRight />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="font-bold text-primary1 text-lg mb-2">
            Area: <span className="text-primary2">{item.area} sq.ft.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-2">Plot: {item.plot}</p>
          <p className="text-gray-700 text-md mb-4">
            Location: <span className="font-bold">{item.location}</span>
          </p>
        </div>

        {/* Auction Start and End Time */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <IoTimeOutline className="mr-2" />
            <p className="text-gray-700">
              Auction Start:{" "}
              <span className="font-semibold">
                {new Date(item.auctionStart).toLocaleDateString()}
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <IoTimeOutline className="mr-2" />
            <p className="text-gray-700">
              Auction End:{" "}
              <span className="font-semibold">
                {new Date(item.auctionEnd).toLocaleDateString()}
              </span>
            </p>
          </div>
        </div>

        {/* Property Type Tag */}
        <div className="text-white text-center px-4 rounded-lg py-2 bg-yellow-400 absolute top-0 left-0 font-semibold">
          {item.propertyType}
        </div>

        {/* View Detail Button */}
        <button
          className="bg-primary1 text-white font-bold py-2 px-4 rounded-lg self-end"
          onClick={handleCardClick}
        >
          View Detail
        </button>
      </div>
    </div>
  );
};

export default CardItem;
