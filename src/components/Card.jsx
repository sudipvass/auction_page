import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { propertyDetail } from "../assets/propertyData";
import CardFilter from "./CardFilter";
import CardItem from "./CardItem";
import { calculateCountdown } from "../assets/helper";

const Card = () => {
  const [filteredCards, setFilteredCards] = useState(propertyDetail);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filters, setFilters] = useState({
    auctionType: "",
    propertyType: "",
    province: "",
    district: "",
  });
  const [linkSectionFilter, setLinkSectionFilter] = useState("all");
  const [countdownTimes, setCountdownTimes] = useState(
    propertyDetail.map((card) => calculateCountdown(card.auctionEnd))
  );
  const [visibleCount, setVisibleCount] = useState(8);
  const navigate = useNavigate(); // Hook to handle navigation

  // Update countdown times every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownTimes(
        propertyDetail.map((card) => calculateCountdown(card.auctionEnd))
      );
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  // Apply filters to data
  const applyFilters = () => {
    let filtered = propertyDetail;

    if (linkSectionFilter && linkSectionFilter !== "all") {
      filtered = filtered.filter(
        (card) => card.type.toLowerCase() === linkSectionFilter.toLowerCase()
      );
    }

    if (filters.auctionType && filters.auctionType !== "all") {
      filtered = filtered.filter(
        (card) => card.type.toLowerCase() === filters.auctionType.toLowerCase()
      );
    }
    if (filters.propertyType) {
      filtered = filtered.filter(
        (card) =>
          card.propertyType.toLowerCase() === filters.propertyType.toLowerCase()
      );
    }
    if (filters.province) {
      filtered = filtered.filter(
        (card) => card.province.toLowerCase() === filters.province.toLowerCase()
      );
    }
    if (filters.district) {
      filtered = filtered.filter(
        (card) => card.district.toLowerCase() === filters.district.toLowerCase()
      );
    }

    setFilteredCards(filtered);
    setVisibleCount(8); // Reset visible cards count after filtering
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      auctionType: "",
      propertyType: "",
      province: "",
      district: "",
    });
    setLinkSectionFilter("all"); // Reset link section filter
    setFilteredCards(propertyDetail); // Reset to original list
    setVisibleCount(8); // Reset visible cards count after reset
  };

  const handleLinkSectionFilter = (type) => {
    setLinkSectionFilter(type);
    applyFilters();
  };
  const handleAuctionTypeClick = (auctionType) => {
    navigate(`/cards/auctionType/${auctionType.toLowerCase()}`);
  };
  useEffect(() => {
    applyFilters();
  }, [filters, linkSectionFilter]);

  


  

  return (
    <div className="container mx-auto p-4 sm:px-10 mt-20">
    
      <CardFilter
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        filters={filters}
        setFilters={setFilters}
        resetFilters={resetFilters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        applyFilters={applyFilters}
        linkSectionFilter={linkSectionFilter}
        setLinkSectionFilter={setLinkSectionFilter}
        handleLinkSectionFilter={handleLinkSectionFilter}
      />

      {/* Card List */}
      <div className="grid grid-cols-1 px-10 sm:grid-cols-2 md:grid-cols-4 gap-6 py-3">
        {filteredCards.slice(0, visibleCount).map((item, index) => (
          <CardItem
            key={item.id}
            item={item}
            countdownTime={countdownTimes[index]}
          />
        ))}
      </div>

      {/* View More Button */}
      {visibleCount < filteredCards.length && (
        <div className="text-center">
          <button
           onClick={() => handleAuctionTypeClick('total')}
            className="bg-primary1 text-white py-2 px-4 rounded-full mt-4"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
