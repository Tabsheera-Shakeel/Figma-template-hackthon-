import Image from 'next/image';

const DiscountItems = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
       
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">Discount Items</h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2 relative">
      
              <span className="text-pink-500 font-semibold">Wood Chair</span>
              <span className="text-pink-500">✔</span>
              
              <div className="absolute bottom-0 -left-2 w-full h-0.5 bg-pink-500"></div>
            </div>
            <div className="flex items-center space-x-2">
          
              <span className="text-gray-600">Plastic Chair</span>
            </div>
            <div className="flex items-center space-x-2">
          
              <span className="text-gray-600">Sofa Collection</span>
            </div>
          </div>
        </div>

       
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
       
          <div className="lg:w-1/2 w-full text-center lg:text-left space-y-6">
            <h3 className="text-xl font-semibold text-blue-900">20% Discount on All Products</h3>
            <p className="text-gray-700">EORMS SOFA COMPACT</p>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum tristique felis.</p>

            
            <div className="mt-4 space-y-4">
              <div className="flex justify-between">
                <div className="flex items-start space-x-2">
                  <span className="text-gray-400">✔</span>
                  <p className="text-gray-600">Material expose like metals</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-gray-400">✔</span>
                  <p className="text-gray-600">Clear lines and geometric figures</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-start space-x-2">
                  <span className="text-gray-400">✔</span>
                  <p className="text-gray-600">Simple neutral colors</p>
                </div>
                <div className="flex items-start space-x-7">
                  <span className="text-gray-400">✔</span>
                  <p className="text-gray-600 space-x-7">Durable and easy to maintain</p>
                </div>
              </div>
            </div>

           
            <div className="text-center lg:text-left mt-6">
              <button className="bg-pink-500 text-white py-2 px-6">
                Shop Now
              </button>
            </div>
          </div>

          
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-start mt-8 lg:mt-0">
            <Image
              src="/images/tortuga-01-b 1.png" 
              alt="Sofa Image"
              width={550}
              height={450}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountItems;
