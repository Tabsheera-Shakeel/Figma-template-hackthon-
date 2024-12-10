import Image from 'next/image';
import { FaCartPlus, FaHeart, FaSearch } from 'react-icons/fa';

const ShopPage = () => {
  return (
    <div className="flex-col md:flex-row p-4">
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
  
          <h1 className="text-4xl font-bold text-blue-950">Shop Left Sidebar</h1>

          <p className="text-blue-950 text-sm mt-2">
            Home . Pages . 
            <span className="text-pink-500"> Shop Left Sidebar</span>
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
      <div className='flex'>
      <aside className="w-full md:w-1/4 p-4 space-y-6">
  
        <div>
          <h3 className="text-lg font-bold  text-blue-950 underline mb-2">Product Brands</h3>
          <ul className="space-y-1  text-blue-950">
            {["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5", "Brand 6"].map((brand, index) => (
              <li key={index} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {brand}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold  text-blue-950  underline mb-2">Discount Offer</h3>
          <ul className="space-y-1  text-blue-950">
            {["10% Off", "20% Off", "50% Off"].map((offer, index) => (
              <li key={index} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {offer}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold  text-blue-950 underline mb-2">Rating Item</h3>
          <ul className="space-y-1  text-blue-950">
            {["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐"].map((rating, index) => (
              <li key={index} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {rating}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold  text-blue-950 underline mb-2">Categories</h3>
          <ul className="space-y-1  text-blue-950">
            {[
              "Electronics",
              "Clothing",
              "Home Appliances",
              "Accessories",
              "Books",
              "Beauty",
              "Sports",
              "Toys",
              "Furniture",
            ].map((category, index) => (
              <li key={index} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg  text-blue-950 font-bold underline mb-2">Price Filter</h3>
          <ul className="space-y-1  text-blue-950">
            {["$0 - $50", "$50 - $100", "$100 - $200", "$200+"].map((price, index) => (
              <li key={index} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {price}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <h3 className="text-lg  text-blue-950 font-bold underline mb-2">Filter by Color</h3>
          <div className="flex flex-wrap  text-blue-950">
            {["red", "blue", "green", "yellow", "black", "white"].map((color, index) => (
              <div key={index} className="flex items-center space-x-2 w-1/3 mb-4">
                <div
                  className={`w-4 h-4 rounded-full`}
                  style={{ backgroundColor: color }}
                />
                <span>{color}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <section className="text-gray-600 body-font overflow-hidden -mt-14">
        
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">

            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <Image
                  src={`/images/Rectangle 32 (7).png`}
                  alt="Blog Image 1"
                  width={256}
                  height={256}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:flex-grow ml-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-blue-950">Blog Name 1</span>
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
                  src={`/images/Rectangle 32 (8).png`} 
                  alt="Blog Image 2"
                  width={256}
                  height={256}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:flex-grow ml-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-blue-950">Blog Name 2</span>
                </div>

                <div className="flex items-center justify-start space-x-4 mb-2">
                  <div className="text-blue-500 text-lg font-semibold">$39.99</div>
                  <div className="line-through text-pink-500 text-sm">$59.99</div>
                  <div className="flex items-center space-x-1 ml-4">
                    <span className="text-yellow-400 text-sm">★★★★</span>
                  </div>
                </div>

                <p className="leading-relaxed text-sm mb-4 line-clamp-2">
                  Nulla facilisi. Nam malesuada augue ut nulla condimentum, at elementum arcu placerat. Ut et nunc ut urna.
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
                  src={`/images/Rectangle 32 (9).png`} 
                  alt="Blog Image 3"
                  width={256}
                  height={256}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:flex-grow ml-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-blue-950">Blog Name 1</span>
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
                  src={`/images/Rectangle 32 (10).png`} 
                  alt="Blog Image 4"
                  width={256}
                  height={256}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:flex-grow ml-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-blue-950">Blog Name 1</span>
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
                  src={`/images/Rectangle 32 (11).png`} 
                  alt="Blog Image 5"
                  width={256}
                  height={256}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:flex-grow ml-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-blue-950">Blog Name 1</span>
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
          </div>
        </div>
        <div className="flex justify-center mt-12 -ml-72">
            <Image
              src="/images/image 1174.png"
              alt="Centered Product"
              width={600}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
      </section>
      
    </div>
  </div>
  );
};

export default ShopPage;
