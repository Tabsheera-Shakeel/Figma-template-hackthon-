import Image from 'next/image'; 
export default function LoginPage() {
  return (
    <div className="container mx-auto">

      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="w-full">
            <h1 className="text-4xl font-bold text-blue-950 text-left">My Account</h1>
            <p className="text-blue-950 text-sm mt-2 text-left">
              Home . <span className="text-pink-500">My Account</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-md mx-auto px-6 sm:px-10 shadow-lg rounded-lg border border-gray-300">
      
          <h2 className="text-2xl font-bold text-dark-blue text-center">Sign In</h2>
          <p className="text-gray-600 mt-2 text-center">Please login using the details below.</p>
          <form className="mt-8 space-y-6">
           
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex justify-start mt-2">
              <a href="#" className="text-pink-500 text-sm">{`Forgot Password?`}</a>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm mt-6 mb-6">
            {`Don't have an account?`}{' '}
            <a href="#" className="text-pink-500 font-semibold">Create an account</a>
          </p>
        </div>
        
      </section>

      <div className="flex justify-center mt-12">
        <Image
          src="/images/image 1174.png"
          alt="Centered Product"
          width={900}
          height={600}
          className="object-cover rounded-lg"
        />
      </div>

    </div>
  );
}
