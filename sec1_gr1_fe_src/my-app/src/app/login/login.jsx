import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600">Please sign in to continue</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>
            <Link href="/forgot-password" className="text-sm text-blue-500 hover:text-blue-600">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-500 hover:text-blue-600">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

