import Image from 'next/image'

export default function BlogPage() {
  return (
    <div className="container mx-auto">
     
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <h1 className="text-4xl font-bold text-blue-950">Blog Page</h1>
          <p className="text-blue-950 text-sm mt-2">
            Home . Blog . 
            <span className="text-pink-500"> Blog page</span>
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 mt-16 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 py-8">
      
        <div className="space-y-8 md:col-span-3">
          
          <div>
            <Image 
              src="/images/bruce-mars-FWVMhUa_wbY-unsplash 2.png" 
              alt="Large Blog Image" 
              width={1200} 
              height={600} 
              className="w-full object-cover"
            />
          </div>

          {/* Heading with Loreum Text */}
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-blue-900">Lorem Ipsum Dolor Sit Amet</h2>
            <p className="text-blue-900 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
            <p className="text-blue-900 mt-4">Praesent libero. Sed cursus ante dapibus diam. Nulla quis sem at nibh elementum imperdiet.</p>
          </div>

          {/* Two Line Lorem Section */}
          <div className="mt-8">
            <p className="text-blue-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <p className="text-blue-900 mt-4">
              Nulla quis sem at nibh elementum imperdiet. Integer nec odio. Praesent libero.
            </p>
          </div>

          {/* Three Big Image Sections */}
          <div className="space-y-8">
            <div className="mt-8">
              <Image 
                src="/images/bruce-mars-FWVMhUa_wbY-unsplash 3.png" 
                alt="Small Blog Image" 
                width={600} 
                height={400} 
                className="w-full object-cover"
              />
              <h3 className="text-2xl font-bold text-blue-950 mt-4">Lorem Ipsum Dolor Sit Amet</h3>
              <p className="text-blue-900 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
              <p className="text-blue-900 mt-4">Praesent libero. Sed cursus ante dapibus diam. Nulla quis sem at nibh elementum imperdiet.</p>
              <p className="text-pink-500 mt-4 cursor-pointer">Read More ➡️</p>
            </div>

            <div className="mt-8">
              <Image 
                src="/images/bruce-mars-FWVMhUa_wbY-unsplash 4.png" 
                alt="Small Blog Image" 
                width={600} 
                height={400} 
                className="w-full object-cover"
              />
              <h3 className="text-2xl font-bold text-blue-950 mt-4">Lorem Ipsum Dolor Sit Amet</h3>
              <p className="text-blue-900 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
              <p className="text-blue-900 mt-4">Praesent libero. Sed cursus ante dapibus diam. Nulla quis sem at nibh elementum imperdiet.</p>
              <p className="text-pink-500 mt-4 cursor-pointer">Read More ➡️</p>
            </div>
          </div>
        </div>

        {/* Right Sidebar (25% of the Screen) */}
        <div className="space-y-8 md:col-span-1">
          {/* Search Section */}
          <div>
            <h3 className="text-xl font-bold text-blue-950">Search</h3>
            <div className="flex items-center mt-4 border border-gray-300">
              <input type="text" placeholder="Search..." className="w-full py-2 px-4 border-none outline-none" />
              <span className="text-pink-500 text-lg ml-2">🔍</span>
            </div>
          </div>

   
          <div>
            <Image 
              src="/images/Group 227.png" 
              alt="Category Image" 
              width={100} 
              height={70} 
              className="w-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-950">Recent Posts</h3>
            <Image 
              src="/images/Group 222.png" 
              alt="Recent Post Image" 
              width={100} 
              height={70} 
              className="w-full object-cover"
            />
          </div>

  
          <div>
            <h3 className="text-xl font-bold text-blue-950">Sale Product</h3>
            <Image 
              src="/images/Group 221.png" 
              alt="Sale Product Image" 
              width={100} 
              height={70} 
              className="w-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-950">Offer Product</h3>
            <Image 
              src="/images/Group 225.png" 
              alt="Offer Product Image" 
              width={100} 
              height={70} 
              className="w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-950">Tags</h3>
            <Image 
              src="/images/Group 229.png" 
              alt="Tags Image" 
              width={100} 
              height={70} 
              className="w-full object-cover"
            />
          </div>
        </div> 
      </div>
      <div className="flex justify-center mt-12">
            <Image
              src="/images/image 1174.png"
              alt="Centered Product"
              width={600}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
    </div>
  )
}
