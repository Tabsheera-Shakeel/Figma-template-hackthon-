import Image from 'next/image';

const FeaturedProducts = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src="/images/Featured product (1).png"
                alt="Product 1"
                width={500}
                height={500}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-pink-500 text-lg font-semibold">Cantilever Chair</h3>
              <div className="w-16 h-1 mx-auto mt-2 bg-gradient-to-r from-green-500 via-pink-500 to-blue-500"></div>
              <p className="text-blue-800 mt-2">Code: X523201</p>
              <p className="text-xl text-blue-800 mt-2">{`$42.00`}</p>
            </div>
          </div>

          <div className="bg-blue-700 p-4 rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src="/images/Featured product(2).png"
                alt="Product 2"
                width={500}
                height={500}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-white text-lg font-semibold">Cantilever Chair</h3>
              <div className="w-16 h-1 mx-auto mt-2 bg-gradient-to-r from-green-500 via-pink-500 to-blue-500"></div>
              <p className="text-white mt-2">Code: X523201</p>
              <p className="text-xl text-white mt-2">{`$42.00`}</p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src="/images/Component 3.png"
                alt="Product 3"
                width={500}
                height={500}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-pink-500 text-lg font-semibold">Cantilever Chair</h3>
              <div className="w-16 h-1 mx-auto mt-2 bg-gradient-to-r from-green-500 via-pink-500 to-blue-500"></div>
              <p className="text-blue-800 mt-2">Code: X523201</p>
              <p className="text-xl text-blue-800 mt-2">{`$42.00`}</p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <div className="relative">
              <Image
                src="/images/Component4-Copy.png"
                alt="Product 4"
                width={500}
                height={500}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-pink-500 text-lg font-semibold">Cantilever Chair</h3>
              <div className="w-16 h-1 mx-auto mt-2 bg-gradient-to-r from-green-500 via-pink-500 to-blue-500"></div>
              <p className="text-blue-800 mt-2">Code: X523201</p>
              <p className="text-xl text-blue-800 mt-2">{`$42.00`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
