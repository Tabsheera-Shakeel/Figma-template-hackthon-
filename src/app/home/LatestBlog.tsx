import Image from 'next/image';

const Blogs = () => {
  return (
    <div  className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Latest Blog</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {/* Blog Card 1 */}
          <div className="flex justify-center w-full">
            <Image
              src="/images/Leatest blog.png"
              alt="Blog 1"
              width={400}  // Increased the size
              height={300}
              className="object-cover rounded-lg"
            />
          </div>

          {/* Blog Card 2 */}
          <div className="flex justify-center w-full">
            <Image
              src="/images/Leatest blog (1).png"
              alt="Blog 2"
              width={400}  // Increased the size
              height={300}
              className="object-cover rounded-lg"
            />
          </div>

          {/* Blog Card 3 */}
          <div className="flex justify-center w-full">
            <Image
              src="/images/Leatest blog (2).png"
              alt="Blog 3"
              width={400}  // Increased the size
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
