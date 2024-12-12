import Image from 'next/image';
import { FaCartPlus, FaHeart, FaSearch } from 'react-icons/fa';

const Page = () => {
  return (
    <div>
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
  
          <h1 className="text-4xl font-bold text-blue-950">Shop List</h1>

          <p className="text-blue-950 text-sm mt-2">
            Home . Pages . 
            <span className="text-pink-500"> Shop List</span>
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex flex-wrap justify-between items-center space-y-4 lg:space-y-0 lg:flex-nowrap">
            <div className="w-full lg:w-1/2">
              <h3 className="text-xl font-semibold text-blue-950">Ecommerce Accessories & Fashion Item</h3>
              <p className="text-blue-950 mt-2">About 9,620 results (0.62 seconds)</p>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
         
              <div className="flex items-center space-x-2 w-full sm:w-1/3">
                <label htmlFor="perPage" className="text-sm text-blue-950">Per Page:</label>
                <input
                  id="perPage"
                  type="text"
                  className="p-1.5 text-sm border border-gray-300 rounded-md w-full"
                  placeholder="10"
                />
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-1/3">
                <label htmlFor="sortBy" className="text-sm text-blue-950">Sort By:</label>
                <input
                  id="sortBy"
                  type="text"
                  className="p-1.5 text-sm border border-gray-300 rounded-md w-full"
                  placeholder="Best Match"
                />
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-1/3">
                <label htmlFor="view" className="text-sm text-blue-950">View:</label>
                <input
                  id="view"
                  type="text"
                  className="p-1.5 text-sm border border-gray-300 rounded-md w-full"
                  placeholder="Grid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
        
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <Image
                  src="/images/Rectangle-32.png" 
                  alt="Product Image 1"
                  width={256}
                  height={256}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:flex-grow ml-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-blue-950">Product Name 1</span>
                </div>

                <div className="flex items-center justify-start space-x-4 mb-2">
                  <div className="text-blue-500 text-lg font-semibold">$49.99</div>
                  <div className="line-through text-pink-500 text-sm">$69.99</div>
                  <div className="flex items-center space-x-1 ml-4">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                  </div>
                </div>

                <p className="leading-relaxed text-sm mb-4 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>

                <div className="flex items-center space-x-4">
                  <FaCartPlus className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                  <FaHeart className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                  <FaSearch className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                </div>
              </div>
            </div>

           
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <Image
                  src="/images/Rectangle-32-(1).png" 
                  alt="Product Image 2"
                  width={256}
                  height={256}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:flex-grow ml-6">
        
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-blue-950">Product Name 2</span>
                </div>

                <div className="flex items-center justify-start space-x-4 mb-2">
                  <div className="text-blue-500 text-lg font-semibold">$59.99</div>
                  <div className="line-through text-pink-500 text-sm">$79.99</div>
                  <div className="flex items-center space-x-1 ml-4">
                    <span className="text-yellow-400 text-sm">★★★★☆</span>
                  </div>
                </div>

                <p className="leading-relaxed text-sm mb-4 line-clamp-2">
                  Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                </p>

                <div className="flex items-center space-x-4">
                  <FaCartPlus className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                  <FaHeart className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                  <FaSearch className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                </div>
              </div>
            </div>

       
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <Image
                  src="/images/Rectangle-32-(2).png" 
                  alt="Product Image 3"
                  width={256}
                  height={256}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:flex-grow ml-6">
               
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-blue-950">Product Name 3</span>
                </div>

                <div className="flex items-center justify-start space-x-4 mb-2">
                  <div className="text-blue-500 text-lg font-semibold">$39.99</div>
                  <div className="line-through text-pink-500 text-sm">$59.99</div>
                  <div className="flex items-center space-x-1 ml-4">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                  </div>
                </div>

                <p className="leading-relaxed text-sm mb-4 line-clamp-2">
                  Fusce ut placerat orci nulla pellentesque. In eu arcu lectus. Vestibulum auctor euismod purus.
                </p>

                <div className="flex items-center space-x-4">
                  <FaCartPlus className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                  <FaHeart className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                  <FaSearch className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <Image
                  src="/images/Rectangle-32-(3).png" 
                  alt="Product Image 4"
                  width={256}
                  height={256}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:flex-grow ml-6">
               
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-blue-950">Product Name 4</span>
                </div>

                <div className="flex items-center justify-start space-x-4 mb-2">
                  <div className="text-blue-500 text-lg font-semibold">$39.99</div>
                  <div className="line-through text-pink-500 text-sm">$59.99</div>
                  <div className="flex items-center space-x-1 ml-4">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                  </div>
                </div>

                <p className="leading-relaxed text-sm mb-4 line-clamp-2">
                  Fusce ut placerat orci nulla pellentesque. In eu arcu lectus. Vestibulum auctor euismod purus.
                </p>

                <div className="flex items-center space-x-4">
                  <FaCartPlus className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                  <FaHeart className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                  <FaSearch className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <Image
                  src="/images/Rectangle-32-(4).png" 
                  alt="Product Image 5"
                  width={256}
                  height={256}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:flex-grow ml-6">
               
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-blue-950">Product Name 5</span>
                </div>

                <div className="flex items-center justify-start space-x-4 mb-2">
                  <div className="text-blue-500 text-lg font-semibold">$39.99</div>
                  <div className="line-through text-pink-500 text-sm">$59.99</div>
                  <div className="flex items-center space-x-1 ml-4">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                  </div>
                </div>

                <p className="leading-relaxed text-sm mb-4 line-clamp-2">
                  Fusce ut placerat orci nulla pellentesque. In eu arcu lectus. Vestibulum auctor euismod purus.
                </p>

                <div className="flex items-center space-x-4">
                  <FaCartPlus className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                  <FaHeart className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                  <FaSearch className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <Image
                  src="/images/Rectangle-32-(6).png" 
                  alt="Product Image 6"
                  width={256}
                  height={256}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:flex-grow ml-6">
               
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-blue-950">Product Name 6</span>
                </div>

                <div className="flex items-center justify-start space-x-4 mb-2">
                  <div className="text-blue-500 text-lg font-semibold">$39.99</div>
                  <div className="line-through text-pink-500 text-sm">$59.99</div>
                  <div className="flex items-center space-x-1 ml-4">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                  </div>
                </div>

                <p className="leading-relaxed text-sm mb-4 line-clamp-2">
                  Fusce ut placerat orci nulla pellentesque. In eu arcu lectus. Vestibulum auctor euismod purus.
                </p>

                <div className="flex items-center space-x-4">
                  <FaCartPlus className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                  <FaHeart className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                  <FaSearch className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                </div>
              </div>
            </div>
 

           
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <Image
                  src="/images/Rectangle-32-(5).png" 
                  alt="Product Image 7"
                  width={256}
                  height={256}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:flex-grow ml-6">
               
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-blue-950">Product Name 7</span>
                </div>

                <div className="flex items-center justify-start space-x-4 mb-2">
                  <div className="text-blue-500 text-lg font-semibold">$39.99</div>
                  <div className="line-through text-pink-500 text-sm">$59.99</div>
                  <div className="flex items-center space-x-1 ml-4">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                  </div>
                </div>

                <p className="leading-relaxed text-sm mb-4 line-clamp-2">
                  Fusce ut placerat orci nulla pellentesque. In eu arcu lectus. Vestibulum auctor euismod purus.
                </p>

                <div className="flex items-center space-x-4">
                  <FaCartPlus className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                  <FaHeart className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                  <FaSearch className="text-gray-600 hover:text-gray-900 cursor-pointer" />
                </div>
              </div>
            </div> 

            <div className="flex justify-center mt-12">
            <Image
              src="/images/image-1174.png"
              alt="Centered Product"
              width={600}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
         </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
