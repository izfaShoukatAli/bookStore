import React from "react";

const Cards = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure className="w-full h-60">
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px]  hover:bg-pink-500  hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

// import React from "react";

// const Cards = ({ item }) => {
//   return (
//     <div className="p-4 flex justify-center">
//       <div className="card bg-white w-80 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
//         <figure>
//           <img
//             src={item.image}
//             alt={item.title || "Product Image"}
//             className="w-full h-48 object-cover"
//           />
//         </figure>
//         <div className="p-4">
//           <h2 className="text-lg font-semibold flex items-center">
//             {item.title || "Product"}
//             <span className="ml-2 badge bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
//               NEW
//             </span>
//           </h2>
//           <p className="text-gray-600 mt-2">{item.category}</p>
//           <div className="flex justify-end mt-4 space-x-2">
//             <span className="badge border border-gray-300 text-gray-600 text-xs px-2 py-1 rounded-full">
//               Fashion
//             </span>
//             <span className="badge border border-gray-300 text-gray-600 text-xs px-2 py-1 rounded-full">
//               Products
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;
