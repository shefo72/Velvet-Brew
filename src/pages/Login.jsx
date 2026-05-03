import * as Yup from "yup";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { loginApi } from "../api/userApi";
import signupImage from "../assets/SignUp2.jpg";
import { setUser } from "../store/userSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const passwordRules =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const phoneRules = /^[ +]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        passwordRules,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number & one special character",
      )
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remeberMe: false,
    },
    validationSchema,
    onSubmit: handelLogin,
  });

  async function handelLogin(values) {
    try {
      const data = await loginApi(values.email, values.password);
      if (data.status === "success") {
        dispatch(
          setUser({
            user: data.user,
            role: data.role,
          }),
        );

        toast.success(data.message || "Welcome back!");

        setTimeout(() => {
          if (data.role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("/");
          }
        }, 2000);
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to login");
    }
  }

  return (
    <section className="sign-in">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center">
        <div className="image relative hidden lg:block">
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

            <form className="space-y-5" onSubmit={formik.handleSubmit}>
              <div>
                <label
                  className="block text-xs font-semibold text-[#4A3728] mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-4 py-3 bg-[#E8E0D4] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6B4423]"
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs">{formik.errors.email}</p>
              )}

              <div>
                <label
                  className="block text-xs font-semibold text-[#4A3728] mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-4 py-3 bg-[#E8E0D4] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6B4423]"
                />
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs">{formik.errors.password}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-primary-coffee cursor-pointer duration-150 font-semibold text-white rounded-full hover:bg-[#5A3720]"
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
