import Image from 'next/image'

export default function Contact() {
  return (
    <div className="container mx-auto">
      <section className="bg-gray-200 py-20 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
         
          <h1 className="text-4xl font-bold text-blue-950">Contact Us</h1>

          <p className="text-blue-950 text-sm mt-2">
            Home . Pages . 
            <span className="text-pink-600"> Shop Grid Default</span>
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 mt-24 md:grid-cols-2 gap-6 px-4 py-8">
   
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-blue-950">Information About Us</h2>
          <p className="text-blue-900 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>

          <div className="flex space-x-2 -mt-5">
            <span className="text-pink-600 text-9xl">.</span>
            <span className="text-light-blue-500 text-9xl">.</span>
            <span className="text-blue-600 text-9xl">.</span>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-950">Contact Way</h2>
          <Image 
            src="/images/Group 100.png" 
            alt="Contact Image" 
            width={400} 
            height={400} 
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-between gap-6 mb-20">
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-3xl font-bold text-blue-950">Get in Touch</h3>

          <p className="text-blue-900 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          </p>
          <p className="text-blue-900 text-lg">
            Praesent libero. Sed cursus ante dapibus diam. Nulla quis sem at nibh elementum imperdiet.
          </p>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="Your Name" className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md" />
              <input type="email" placeholder="Your Email" className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <input type="text" placeholder="Subject" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            <textarea placeholder="Type Your Message" className="w-full px-4 py-2 border border-gray-300 rounded-md h-32"></textarea>

            <button type="submit" className="w-auto bg-pink-600 text-white py-2 px-6 rounded-md">Send Mail</button>
          </form>
        </div>

        <div className="w-full md:w-1/2">
          <Image 
            src="/images/Group 124.png" 
            alt="Another Image" 
            width={450} 
            height={400} 
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
