import { Link } from "react-router-dom";
import SwiperComponent from "../Components/swiper";
export default function SignUp() {
  return (
    <section className="sign-up">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1  items-center justify-between">
        <div className="hidden lg:block md:block">
          <SwiperComponent />
        </div>

        <div>
          <div className="w-full flex flex-col justify-center px-8 md:px-16 py-12">
            <div className="max-w-md w-full mx-auto">
              <h2 className="text-3xl font-serif font-bold text-[#4A3728] mb-2">
                Welcome To Our Bakery
              </h2>

              <p className="text-sm text-[#8B7355] mb-8">
                Please enter your details to continue your ritual.
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#4A3728] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-[#E8E0D4] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6B4423]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#4A3728] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-[#E8E0D4] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6B4423]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3728] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-[#E8E0D4] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6B4423]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3728] mb-2">
                    Birthday
                  </label>

                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-[#E8E0D4] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6B4423]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3728] mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 bg-[#E8E0D4] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6B4423]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3728] mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 bg-[#E8E0D4] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6B4423]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#6B4423] text-white rounded-full hover:bg-[#5A3720]"
                >
                  Sign Up
                </button>
              </form>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#D4C9B8]" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#F5F0E6] text-[#8B7355] rounded-2xl">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#D4C9B8] rounded-lg hover:bg-[#E8E0D4] transition-colors duration-200">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-sm text-[#4A3728]">Google</span>
                </button>

                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#D4C9B8] rounded-lg hover:bg-[#E8E0D4] transition-colors duration-200">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09z" />
                  </svg>
                  <span className="text-sm text-[#4A3728]">Apple</span>
                </button>
              </div>

              <p className="mt-8 text-center text-sm text-[#8B7355]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-sm text-[#6B4423] font-medium hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
