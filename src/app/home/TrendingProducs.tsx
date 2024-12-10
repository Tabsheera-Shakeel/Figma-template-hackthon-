// import Image from 'next/image';

// const TrendingProducts = () => {
//   return (
//     <div className="py-12">
   
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-blue-900">Trending Products</h2>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 sm:px-10">
       
//         <div className="relative">
//           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    
//             {[
//               '/images/Trending products.png', 
//               '/images/Trending products (1).png',
//               '/images/Trending products (2).png',
//               '/images/Trending products (3).png',
//             ].map((src, index) => (
//               <div key={index} className="flex justify-center">
//                 <Image
//                   src={src}
//                   alt={`Trending Product ${index + 1}`}
//                   width={300}
//                   height={300}
//                   className="object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>

          
//           <div className="grid grid-cols-4 gap-4 mt-4">
           
//             <div className="col-span-3 grid grid-cols-2 gap-4">
//               <div>
//                 <Image
//                   src="/images/Group 154.png" 
//                   alt="Wide Image 1"
//                   width={450}
//                   height={300}
//                   className="object-cover rounded-lg w-full"
//                 />
//               </div>
              
//               <div>
//                 <Image
//                   src="/images/Group 155.png" 
//                   alt="Wide Image 2"
//                   width={450}
//                   height={300}
//                   className="object-cover rounded-lg w-full"
//                 />
//               </div>
//             </div>
//             <div className="col-span-1 flex flex-col gap-4">
//               {[
//                 '/images/Trnding products list.png', 
//                 '/images/Trnding products list (1).png',
//                 '/images/Trnding products list (2).png',
//               ].map((src, index) => (
//                 <Image
//                   key={index}
//                   src={src}
//                   alt={`Stacked Image ${index + 1}`}
//                   width={300}
//                   height={100} 
//                   className="object-cover rounded-lg"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrendingProducts;

// import Image from 'next/image';

// const TrendingProducts = () => {
//   return (
//     <div className="py-12">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-blue-900">Trending Products</h2>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 sm:px-10">
//         <div className="relative">
//           {/* Grid for product cards */}
//           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {[...Array(4)].map((_, index) => (
//               <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
//                 {/* Product Image */}
//                 <Image
//                   src={`/images/Trending products (1) (${index + 1}).pngs`} // Replace with your image paths
//                   alt={`Trending Product ${index + 1}`}
//                   width={200}
//                   height={200}
//                   className="object-cover rounded-lg"
//                 />
//                 {/* Product Info */}
//                 <h3 className="text-lg font-semibold mt-4 text-gray-800">Product Name</h3>
            
//                 <div className="mt-2 text-center">
//                   <p className="text-xl text-blue-900">$45.00</p>
//                   <p className="text-sm text-gray-500 line-through">$60.00</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Grid for the wide images and stacked images */}
//           <div className="grid grid-cols-4 gap-4 mt-4">
//             <div className="col-span-3 grid grid-cols-2 gap-4">
//               <div>
//                 <Image
//                   src="/images/Group 154.png"
//                   alt="Wide Image 1"
//                   width={450}
//                   height={300}
//                   className="object-cover rounded-lg w-full"
//                 />
//               </div>
//               <div>
//                 <Image
//                   src="/images/Group 155.png"
//                   alt="Wide Image 2"
//                   width={450}
//                   height={300}
//                   className="object-cover rounded-lg w-full"
//                 />
//               </div>
//             </div>
//             <div className="col-span-1 flex flex-col gap-4">
//               {[ 
//                 '/images/Trnding products list.png', 
//                 '/images/Trnding products list (1).png',
//                 '/images/Trnding products list (2).png',
//               ].map((src, index) => (
//                 <Image
//                   key={index}
//                   src={src}
//                   alt={`Stacked Image ${index + 1}`}
//                   width={300}
//                   height={100}
//                   className="object-cover rounded-lg"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrendingProducts;

// import Image from 'next/image';

// const TrendingProducts = () => {
//   return (
//     <div className="py-12">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-blue-900">Trending Products</h2>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 sm:px-10">
//         <div className="relative">
//           {/* Grid for product cards */}
//           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {/* Define each product with its own image path */}
//             {[
//               { img: '/images/Trending products-first.png', name: 'Product 1', price: '$45.00', originalPrice: '$60.00' },
//               { img: '/images/Trending products-second.png', name: 'Product 2', price: '$50.00', originalPrice: '$70.00' },
//               { img: '/images/Trending products-third.png', name: 'Product 3', price: '$30.00', originalPrice: '$40.00' },
//               { img: '/images/Trending products-Fourth.png', name: 'Product 4', price: '$60.00', originalPrice: '$80.00' }
//             ].map((product, index) => (
//               <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
//                 {/* Product Image */}
//                 <Image
//                   src={product.img}
//                   alt={`Trending Product ${index + 1}`}
//                   width={200}
//                   height={200}
//                   className="object-cover rounded-lg"
//                 />
//                 {/* Product Name */}
//                 <h3 className="text-lg font-semibold text-gray-800 mt-4">{product.name}</h3>
//                 {/* Price and "Light Price" */}
//                 <div className="flex justify-center items-center w-full mt-2 space-x-2">
//                   <p className="text-xl text-blue-900">{product.price}</p>
//                   <p className="text-xl text-blue-300 line-through">{product.originalPrice}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Grid for the wide images and stacked images */}
//           <div className="grid grid-cols-4 gap-4 mt-4">
//             <div className="col-span-3 grid grid-cols-2 gap-4">
//               <div>
//                 <Image
//                   src="/images/Group 154.png"
//                   alt="Wide Image 1"
//                   width={450}
//                   height={300}
//                   className="object-cover rounded-lg w-full"
//                 />
//               </div>
//               <div>
//                 <Image
//                   src="/images/Group 155.png"
//                   alt="Wide Image 2"
//                   width={450}
//                   height={300}
//                   className="object-cover rounded-lg w-full"
//                 />
//               </div>
//             </div>
//             <div className="col-span-1 flex flex-col gap-4">
//               {[ 
//                 '/images/Trnding products list.png', 
//                 '/images/Trnding products list (1).png',
//                 '/images/Trnding products list (2).png',
//               ].map((src, index) => (
//                 <Image
//                   key={index}
//                   src={src}
//                   alt={`Stacked Image ${index + 1}`}
//                   width={300}
//                   height={100}
//                   className="object-cover rounded-lg"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrendingProducts;


import Image from 'next/image';

const TrendingProducts = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Trending Products</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="relative">
          {/* Grid for product cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Define each product with its own image path */}
            {[
              { img: '/images/Trending products-first.png', name: 'Product 1', price: '$45.00', originalPrice: '$60.00' },
              { img: '/images/Trending products-second.png', name: 'Product 2', price: '$50.00', originalPrice: '$70.00' },
              { img: '/images/Trending products-third.png', name: 'Product 3', price: '$30.00', originalPrice: '$40.00' },
              { img: '/images/Trending products-Fourth.png', name: 'Product 4', price: '$60.00', originalPrice: '$80.00' }
            ].map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                {/* Product Image */}
                <Image
                  src={product.img}
                  alt={`Trending Product ${index + 1}`}
                  width={200}
                  height={200}
                  className="object-cover rounded-lg"
                />
                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-800 mt-4">{product.name}</h3>
                {/* Price and "Light Price" */}
                <div className="flex justify-center items-center w-full mt-2 space-x-2">
                  <p className="text-xl text-blue-900">{product.price}</p>
                  <p className="text-xl text-blue-300 line-through">{product.originalPrice}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Grid for the wide images and stacked images */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-14">
            <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Image
                  src="/images/Group 154.png"
                  alt="Wide Image 1"
                  width={450}
                  height={300}
                  className="object-cover rounded-lg w-full"
                />
              </div>
              <div>
                <Image
                  src="/images/Group 155.png"
                  alt="Wide Image 2"
                  width={450}
                  height={300}
                  className="object-cover rounded-lg w-full"
                />
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
              {[ 
                '/images/Trnding products list.png', 
                '/images/Trnding products list (1).png',
                '/images/Trnding products list (2).png',
              ].map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Stacked Image ${index + 1}`}
                  width={300}
                  height={100}
                  className="object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
