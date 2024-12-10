// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <div className="bg-slate-100 py-12">
//       <div className="max-w-7xl mx-auto flex flex-col items-center lg:items-start lg:flex-row justify-between px-6 sm:px-10">
        
   
//         <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center lg:justify-start "> 
//           <Image
//             src="/images/image 32.png"
//             alt="Left Image"
//             width={300}
//             height={300}
//             className="-mt-12"
//           />
//         </div>

//         <div className="lg:w-2/3 lg:pl-0 mt-6 lg:mt-0 text-left"> 
//           <p className="text-pink-500 text-sm mt-2"> 
//             Best Furniture for Your Castle
//           </p>
//           <h1 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
//             New Furniture Collection <br />
//             Trends in 2020
//           </h1>
//           <p className="text-blue-700 mt-4">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Sed
//             ullamcorper, velit at feugiat ultricies.
//           </p>
//           <button className="bg-pink-500 text-white text-sm font-semibold px-6 py-3 rounded-full mt-6 hover:bg-pink-600">
//             Shop Now
//           </button>
//         </div>

//         <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-6"> 
//           <Image
//             src="/images/sofa promotional header.png"
//             alt="Right Image"
//             width={700}
//             height={600}
//             className="rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;






// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <div className="bg-slate-100 min-h-screen flex items-center py-12">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between px-6 sm:px-10">
        
//         {/* Left Image */}
//         {/* <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center lg:justify-start relative -translate-y-8">
//           <Image
//             src="/images/image 32.png"
//             alt="Left Image"
//             width={350}
//             height={400}
//             className="object-cover"
//           />
//         </div> */}
//         <div>
//         <div className="lg:w-1/3 flex justify-center lg:justify-start relative -mt-20">
//   <Image
//     src="/images/image 32.png"
//     alt="Left Image"
//     width={550} // Reduced size
//     height={400} // Reduced size
//     className="object-cover"
//   />
// </div>


// </div>
//         {/* Text Section */}
//         <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0 text-center lg:text-left">
//           <p className="text-pink-500 text-lg mt-2">
//             Best Furniture for Your Castle
//           </p>
//           <h1 className="text-5xl font-bold text-gray-900 mt-4 leading-tight">
//             New Furniture Collection <br />
//             Trends in 2020
//           </h1>
//           <p className="text-blue-800 text-lg mt-4">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            
//             Sed ullamcorper, velit at feugiat ultricies.
//           </p>
//           <button className="bg-pink-500 text-white text-lg font-semibold px-8 py-4 mt-8 hover:bg-pink-600">
//             Shop Now
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6">
//           <Image
//             src="/images/sofa promotional header.png"
//             alt="Right Image"
//             width={1000}
//             height={900}
//             className="rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex items-center py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between px-6 sm:px-10">
        
        {/* Left Image */}
        <div className="lg:w-1/3 flex justify-center lg:justify-start">
          <div className="relative -mt-12"> {/* Adjust margin to pull it up */}
            <Image
              src="/images/image 32.png"
              alt="Left Image"
              width={300}  // Fixed size for the image
              height={350} // Fixed size for the image
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0 text-center lg:text-left">
          <p className="text-pink-500 text-lg mt-2">
            Best Furniture for Your Castle
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
            New Furniture Collection <br />
            Trends in 2020
          </h1>
          <p className="text-blue-800 text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ullamcorper, velit at feugiat ultricies.
          </p>
          <button className="bg-pink-500 text-white text-lg font-semibold px-8 py-4 mt-8 hover:bg-pink-600">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6">
          <Image
            src="/images/sofa promotional header.png"
            alt="Right Image"
            width={1000}
            height={900}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;




// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <div className="bg-slate-100 min-h-screen flex items-center py-12">
//       <div className="max-w-7xl mx-auto flex flex-col items-center lg:items-start lg:flex-row justify-between px-6 sm:px-10">
        
//         {/* Left Image */}
//         <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center lg:justify-start -translate-x-6">
//           <Image
//             src="/images/image 32.png"
//             alt="Left Image"
//             width={400}
//             height={400}
//             className="-mt-12"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="lg:w-2/3 lg:pl-4 mt-6 lg:mt-0 text-center lg:text-left -translate-x-6">
//           <p className="text-pink-500 text-lg mt-2">
//             Best Furniture for Your Castle
//           </p>
//           <h1 className="text-5xl font-bold text-gray-900 mt-4 leading-tight">
//             New Furniture Collection <br />
//             Trends in 2020
//           </h1>
//           <p className="text-blue-700 text-lg mt-4">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             <br />
//             Sed ullamcorper, velit at feugiat ultricies.
//           </p>
//           <button className="bg-pink-500 text-white text-lg font-semibold px-8 py-4 rounded-full mt-8 hover:bg-pink-600">
//             Shop Now
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-6">
//           <Image
//             src="/images/sofa promotional header.png"
//             alt="Right Image"
//             width={900}
//             height={800}
//             className="rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



// <div className="w-full lg:w-1/2 flex justify-end mt-6">
//           <Image
//             src="/images/sofa promotional header.png"
//             alt="Right Image"
//             width={1000}
//             height={900}
//             className="rounded-lg"
//           />
//         </div>