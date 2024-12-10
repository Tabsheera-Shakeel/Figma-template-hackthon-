import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface Props {
  params: Promise<{
    productId: string;
  }>;
}

const ProductPage = async ({ params }: Props) => {
  
  const resolvedParams = await params;
  const { productId } = resolvedParams;

  return (
    <div className="min-h-screen py-10">
      <section className=" bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <h1 className="text-4xl font-bold text-blue-950">Shop Grid Default</h1>
          <p className="text-blue-950 text-sm mt-2">
            Home . Pages . <span className="text-pink-500">Shop Grid Default</span>
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <Image
              src={`/images/Rectangle 138.png`}
              alt={`Product ${productId}`}
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-blue-950 mb-2">
                {`Product Name ${productId}`}
              </h1>

              <div className="flex items-center gap-1 mb-4">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <FaStar key={index} className="text-yellow-500 text-lg" />
                  ))}
              </div>

              <p className="text-blue-900 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="mt-6">
              <p className="text-2xl font-semibold text-blue-950">$49.99</p>
              <p className="text-sm text-gray-500 line-through">$69.99</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <button className="px-6 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700">
                Add to Cart
              </button>
              <button className="px-6 py-2 border border-pink-600 text-pink-600 font-semibold rounded-lg hover:bg-pink-100">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Details</h2>
          <p className="text-blue-900 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default ProductPage;

export async function generateStaticParams() {
  return [
    { productId: "1" },
    { productId: "2" },
    { productId: "3" },
  ];
}
