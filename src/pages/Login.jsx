import { Link } from "react-router-dom";
import signupImage from "../assets/SignUp2.jpg";

export default function Login() {
  return (
    <section className="sign-in">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center">
        <div className="image relative hidden lg:block md:block">
          <img
            src={signupImage}
            alt="Bakery Image"
            className="w-175 object-cover"
          />
        </div>

        <div className="w-full flex flex-col justify-center px-8 md:px-16 py-12">
          <div className="max-w-md w-full mx-auto">
            <div className="title flex flex-col items-center">
              <h2 className="text-4xl font-serif font-bold text-[#4A3728] mb-2">
                Welcome Back
              </h2>

              <p className="text-sm text-[#8B7355] mb-8">
                Please enter your details to access your account.
              </p>
            </div>

            <form className="space-y-5">
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
                Sign In
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-[#8B7355]">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-[#6B4423] font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
