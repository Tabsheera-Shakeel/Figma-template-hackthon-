import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <h1 className="text-4xl font-bold text-blue-950">Shop Grid Default</h1>
          <p className="text-blue-950 text-sm mt-2">
            Home . Pages . 
            <span className="text-pink-500"> Shop Grid Default</span>
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

     
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
              <Image
                src="/images/Ecommerce accesories (1).png"
                alt="Product 1"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
              <Image
                src="/images/Ecommerce accesories.png"
                alt="Product 2"
                width={350}
                height={500}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
              <Image
                src="/images/Ecommerce accesories (2).png"
                alt="Product 3"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
              <Image
                src="/images/Ecommerce accesories (3).png"
                alt="Product 4"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
              <Image
                src="/images/Ecommerce accesories (4).png"
                alt="Product 5"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
              <Image
                src="/images/Ecommerce accesories (5).png"
                alt="Product 6"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
              <Image
                src="/images/Ecommerce accesories (6).png"
                alt="Product 7"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
              <Image
                src="/images/Ecommerce accesories (7).png"
                alt="Product 8"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
              <Image
                src="/images/Ecommerce accesories (8).png"
                alt="Product 9"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
              <Image
                src="/images/Ecommerce accesories (9).png"
                alt="Product 10"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
              <Image
                src="/images/Ecommerce accesories (10).png"
                alt="Product 11"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
              <Image
                src="/images/Ecommerce accesories (11).png"
                alt="Product 12"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Image
              src="/images/image-1174.png"
              alt="Centered Product"
              width={900}
              height={600}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
