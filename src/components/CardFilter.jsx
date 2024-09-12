import React, { useState } from "react";
import { BsFilterRight } from "react-icons/bs";

const CardFilter = ({
  showFilters,
  setShowFilters,
  filters,
  setFilters,
  resetFilters,
  activeFilter,
  setActiveFilter,
  applyFilters,
  linkSectionFilter,
  setLinkSectionFilter,
  handleLinkSectionFilter, // Pass the handler
}) => {
  // Create a temporary filter state to hold user selections before applying
  const [tempFilters, setTempFilters] = useState(filters);

  const handleTempFilterChange = (e) => {
    setTempFilters({ ...tempFilters, [e.target.name]: e.target.value });
  };

  const handleFilterByType = (type) => {
    handleLinkSectionFilter(type); // Use the handler passed from Card
    setActiveFilter(type);
  };

  const handleApplyFilters = () => {
    setFilters(tempFilters); // Apply tempFilters to actual filters
    applyFilters(); // Trigger the filtering logic passed in from parent
  };

  const handleResetFilters = () => {
    setTempFilters({
      auctionType: "",
      propertyType: "",
      province: "",
      district: "",
    });
    resetFilters(); // Reset actual filters
  };

  return (
    <>
      {/* Filter buttons */}
      <div className="sm:px-2 flex flex-row justify-between md:flex-row md:items-start items-center">
        <ul className="sm:px-10 flex gap-4 sm:gap-2 justify-center sm:justify-start items-center flex-wrap">
          <li
            onClick={() => handleFilterByType("all")}
            className={`text-base px-2 py-1 sm:px-4 sm:py-2 leading-normal tracking-normal cursor-pointer hover:bg-primary2 hover:text-white transition duration-300 ease-in-out ${
              linkSectionFilter === "all" ? "bg-primary2 text-white" : "bg-yellow-300"
            }`}
          >
            All
          </li>
          <li
            onClick={() => handleFilterByType("credit")}
            className={`text-base px-2 py-1 sm:px-4 sm:py-2 hover:bg-primary2 hover:text-white cursor-pointer transition duration-300 ease-in-out ${
              linkSectionFilter === "credit" ? "bg-primary2 text-white" : "bg-yellow-300"
            }`}
          >
            Credit Auction
          </li>
          <li
            onClick={() => handleFilterByType("nba")}
            className={`text-base px-2 py-1 sm:px-4 sm:py-2 hover:bg-primary2 hover:text-white cursor-pointer transition duration-300 ease-in-out ${
              linkSectionFilter === "nba" ? "bg-primary2 text-white" : "bg-yellow-300"
            }`}
          >
            NBA
          </li>
          <li
            onClick={() => handleFilterByType("banking")}
            className={`text-base px-2 py-1 sm:px-4 sm:py-2 hover:bg-primary2 hover:text-white cursor-pointer transition duration-300 ease-in-out ${
              linkSectionFilter === "banking" ? "bg-primary2 text-white" : "bg-yellow-300"
            }`}
          >
            Banking Assets
          </li>
        </ul>

        {/* Filter Toggle */}
        <div
          className="flex gap-2 cursor-pointer border outline-2 text-base px-2  bg-yellow-300 py-1  self-start"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filter
          <span>
            <BsFilterRight className="text-xl cursor-pointer hover:text-primary2 transition duration-300 ease-in-out" />
          </span>
        </div>
      </div>
      <div className="w-full bg-yellow-400 h-[1px] mt-3"></div>

      {/* Toggleable Filters Section */}
      {showFilters && (
        <div className="bg-gray-100 p-4 ">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Auction Type Dropdown */}
            <select
              name="auctionType"
              value={tempFilters.auctionType}
              onChange={handleTempFilterChange}
              className="border p-2 text-sm md:text-base w-full md:w-auto"
            >
              <option value="">Select Auction Type</option>
              <option value="credit">Credit Auction</option>
              <option value="nba">NBA</option>
              <option value="banking">Banking Assets</option>
            </select>

            {/* Property Type Dropdown */}
            <select
              name="propertyType"
              value={tempFilters.propertyType}
              onChange={handleTempFilterChange}
              className="border p-2 text-sm md:text-base w-full md:w-auto"
            >
              <option value="">Select Property Type</option>
              <option value="land">Land</option>
              <option value="building">Building</option>
              <option value="land/building">land/building</option>
            </select>

            {/* Province Dropdown */}
            <select
              name="province"
              value={tempFilters.province}
              onChange={handleTempFilterChange}
              className="border p-2 text-sm md:text-base w-full md:w-auto"
            >
              <option value="">Select Province</option>
              <option value="Koshi">Koshi</option>
              <option value="Madhesh">Madhesh</option>
              <option value="Bagmati">Bagmati</option>
              <option value="Gandaki">Gandaki</option>
              <option value="Lumbini">Lumbini</option>
              <option value="Karnali">Karnali</option>
              <option value="Sudurpaschim">Sudurpaschim</option>
            </select>

            {/* District Dropdown */}
            <select
              name="district"
              value={tempFilters.district}
              onChange={handleTempFilterChange}
              className="border p-2 text-sm md:text-base w-full md:w-auto"
            >
              <option value="">Select District</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Bhaktapur">Bhaktapur</option>
              <option value="Lalitpur">Lalitpur</option>
              <option value="Pokhara">Pokhara</option>
              <option value="Biratnagar">Biratnagar</option>
              <option value="Dharan">Janakpur</option>
              <option value="Nepalgunj">Nepalgunj</option>
            </select>
          </div>

          {/* Apply and Reset Buttons */}
          <div className="mt-4">
            <button
              className="bg-primary1 hover:bg-yellow-400 text-white px-4 py-2 "
              onClick={handleApplyFilters} // Apply filters when clicked
            >
              Apply
            </button>
            <button
              className="bg-primary2 hover:bg-[#292727] text-white px-4 py-2  ml-2"
              onClick={handleResetFilters} // Reset filters when clicked
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardFilter;
