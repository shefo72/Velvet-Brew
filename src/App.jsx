import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { lazy, useState, Suspense } from "react";

import AppLayout from "./UI/AppLayout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import FullPageSpinner from "./UI/FullPageSpinner";

const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const Cart = lazy(() => import("./pages/Cart"));
const OrderConfirmation = lazy(() => import("./pages/OrderConfirmation"));
const Menu = lazy(() => import("./pages/Menu"));
const Checkout = lazy(() => import("./pages/Checkout"));

const DashboardLayout = lazy(() => import("./UI/DashboardLayout"));
const DashboardProducts = lazy(() => import("./pages/DashboardProducts"));
const DashboardOverview = lazy(() => import("./pages/DashboardOverView"));
const DashboardInventory = lazy(() => import("./pages/DashboardInventory"));

function App() {
  const [search, setSearch] = useState("");

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 3 * 60 * 1000, // 3 minutes
      },
    },
  });

  const router = createBrowserRouter([
    {
      element: <AppLayout search={search} setSearch={setSearch} />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/cart", element: <Cart /> },
        { path: "/menu", element: <Menu /> },
        { path: "/checkout", element: <Checkout /> },
        {
          path: "/orders/:orderId",
          element: <OrderConfirmation />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <Suspense fallback={<FullPageSpinner />}>
          <DashboardLayout />
        </Suspense>
      ),
      children: [
        { index: true, element: <Navigate replace to="overview" /> },
        { path: "overview", element: <DashboardOverview /> },
        { path: "products", element: <DashboardProducts /> },
        { path: "inventory", element: <DashboardInventory /> },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      {/* Toaster for notification */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#ffffff",
            color: "#3a2d28",
            padding: "16px 24px",
            fontSize: "14px",
            fontWeight: "500",
          },
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
