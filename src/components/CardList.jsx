// // src/components/CardList.js
// import React, { useContext } from "react";
// import CardItem from "./CardItem";
// import { PropertyContext } from "../context/PropertyContext";

// const CardList = () => {
//   const { filteredCards } = useContext(PropertyContext);

//   return (
//     <div className="container mx-auto p-4 sm:px-10 mt-20">
//       <div className="w-full bg-gray-400 h-[1.5px]"></div>

//       <div className="grid grid-cols-1 px-10 sm:grid-cols-2 md:grid-cols-4 gap-6 py-20">
//         {filteredCards.length > 0 ? (
//           filteredCards.map((item) => (
//             <CardItem
//               key={item.id}
//               item={item}
//               countdownTime={item.countdownTime} // Ensure countdownTime is available in filteredCards
//             />
//           ))
//         ) : (
//           <p className="text-center col-span-3">
//             No cards match the search criteria.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CardList;
