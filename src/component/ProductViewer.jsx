// import React, { useState } from 'react';

// const ProductViewer = ({ products }) => {
//   const [startIndex, setStartIndex] = useState(0);

//   const products = [
//     { id: 1, name: 'Product 1', price: 10 },
//     { id: 2, name: 'Product 2', price: 20 },
//     { id: 3, name: 'Product 3', price: 30 },
//     { id: 4, name: 'Product 4', price: 40 },
//     { id: 5, name: 'Product 5', price: 50 },
//     { id: 6, name: 'Product 6', price: 60 },
//     { id: 7, name: 'Product 7', price: 70 },
//     // Add more products as needed
//   ];

//   const onNextClick = () => {
//     // Calculate the next start index
//     const nextIndex = startIndex + 5 < products.length ? startIndex + 5 : 0;
//     setStartIndex(nextIndex);
//   };

//   return (
//     <div>
//       {(products ?? []).slice(startIndex, startIndex + 5).map((product, index) => (
//         <div key={index}>
//           {/* Display your product information here */}
//           <p>{product.name}</p>
//           <p>{product.price}</p>
//           {/* Add more product information as needed */}
//         </div>
//       ))}
//       <button onClick={onNextClick}>Next</button>
//     </div>
//   );
// };

// export default ProductViewer;
