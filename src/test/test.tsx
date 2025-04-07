import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

export const TestPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-amber-50 p-4">
      {/* Decorative elements */}
      <div className="absolute left-12 top-12 hidden md:block">
        <svg
          className="h-20 w-20"
          viewBox="0 0 91 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m35.878 14.162 1.333-5.369 1.933 5.183c4.47 11.982 14.036 21.085 25.828 24.467l5.42 1.555-5.209 2.16c-11.332 4.697-19.806 14.826-22.888 27.237l-1.333 5.369-1.933-5.183C34.56 57.599 24.993 48.496 13.201 45.114l-5.42-1.555 5.21-2.16c11.331-4.697 19.805-14.826 22.887-27.237Z"
            fill="#FE4A60"
            stroke="#000"
            strokeWidth="3.445"
          />
          <path
            d="M79.653 5.729c-2.436 5.323-9.515 15.25-18.341 12.374m9.197 16.336c2.6-5.851 10.008-16.834 18.842-13.956m-9.738-15.07c-.374 3.787 1.076 12.078 9.869 14.943M70.61 34.6c.503-4.21-.69-13.346-9.49-16.214M14.922 65.967c1.338 5.677 6.372 16.756 15.808 15.659M18.21 95.832c-1.392-6.226-6.54-18.404-15.984-17.305m12.85-12.892c-.41 3.771-3.576 11.588-12.968 12.681M18.025 96c.367-4.21 3.453-12.905 12.854-14"
            stroke="#000"
            strokeWidth="2.548"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="absolute bottom-12 right-12 hidden md:block">
        <svg
          className="h-20 w-20"
          viewBox="0 0 92 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m35.213 16.953.595-5.261 2.644 4.587a35.056 35.056 0 0 0 26.432 17.33l5.261.594-4.587 2.644A35.056 35.056 0 0 0 48.23 63.28l-.595 5.26-2.644-4.587a35.056 35.056 0 0 0-26.432-17.328l-5.261-.595 4.587-2.644a35.056 35.056 0 0 0 17.329-26.433Z"
            fill="#5CF1A4"
            stroke="#000"
            strokeWidth="2.868"
          />
          <path
            d="M75.062 40.108c1.07 5.255 1.072 16.52-7.472 19.54m7.422-19.682c1.836 2.965 7.643 8.14 16.187 5.121-8.544 3.02-8.207 15.23-6.971 20.957-1.97-3.343-8.044-9.274-16.588-6.254M12.054 28.012c1.34-5.22 6.126-15.4 14.554-14.369M12.035 28.162c-.274-3.487-2.93-10.719-11.358-11.75C9.104 17.443 14.013 6.262 15.414.542c.226 3.888 2.784 11.92 11.212 12.95"
            stroke="#000"
            strokeWidth="2.319"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Login Container */}
      <div className="relative w-full max-w-md rounded-sm border-[3px] border-gray-900">
        <div className="absolute inset-0 h-full w-full translate-x-2 translate-y-2 rounded-sm bg-black"></div>
        <div className="border-3 relative z-20 rounded-sm border-gray-900 bg-amber-100 p-8">
          <h1 className="mb-6 text-center text-3xl font-bold text-gray-900">
            Login
          </h1>

          <div className="mb-6">
            <label className="mb-2 block font-semibold text-gray-900">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-0 h-full w-full translate-x-[3px] translate-y-[3px] rounded-[4px] bg-black"></div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-3 relative z-20 w-full rounded-[3px] border-[3px] border-gray-900 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="youremail@example.com"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="mb-2 block font-semibold text-gray-900">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-0 h-full w-full translate-x-[3px] translate-y-[3px] rounded-[4px] bg-black"></div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-3 relative z-20 w-full rounded-[3px] border-[3px] border-gray-900 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="relative inline-block w-full">
              <div className="absolute inset-0 translate-x-[2px] translate-y-[2px] rounded-[4px] bg-black"></div>
              <button className="border-3 relative z-10 w-full rounded-[3px] border-[3px] border-gray-900 bg-green-400 px-6 py-3 font-bold text-gray-900 transition-all hover:bg-green-500">
                Sign In
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative inline-block h-5 w-5">
                <div className="absolute inset-0 translate-x-[3px] translate-y-[3px] rounded-[4px] bg-black"></div>
                <input
                  id="remember-me"
                  type="checkbox"
                  className="relative z-10 h-5 w-5 rounded-[3px] border-2 border-gray-900 accent-yellow-400"
                />
              </div>
              <label htmlFor="remember-me" className="ml-2 text-gray-900">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <div className="mt-8 border-t-2 border-gray-900 pt-6">
            <p className="mb-4 text-center text-gray-700">
              Don't have an account?
            </p>
            <div className="flex w-full space-x-2">
              <div className="relative">
                <div className="absolute inset-0 translate-x-[2px] translate-y-[2px] rounded-[4px] bg-black"></div>
                <button className="border-3 relative z-10 w-full rounded-[3px] border-[3px] border-gray-900 bg-yellow-300 px-2 py-1 font-bold text-gray-900 transition-all hover:bg-yellow-400">
                  Create Account
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 translate-x-[2px] translate-y-[2px] rounded-[4px] bg-black"></div>
                <button className="border-3 relative z-10 flex w-full items-center gap-1 rounded-[3px] border-gray-900 bg-blue-500 px-1 py-1 pr-2 font-bold text-white transition-all hover:bg-blue-700">
                  <FcGoogle className="h-full w-6 rounded-[2px] border border-gray-900 bg-white p-[2px]" />
                  <span>Continue With Google</span>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600">© 2025 GitIngest. All rights reserved.</p>
      </div>
    </div>
  );
};
