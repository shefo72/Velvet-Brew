import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

import AppLayout from "./UI/AppLayout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import OrderConfirmation from "./pages/OrderConfirmation";
import Details from "./pages/Details";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

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
        { path: "/contact", element: <Contact /> },
        {
          path: "/orders/:orderId",
          element: <OrderConfirmation />,
        },
        {
          path: "/details/:orderId",
          element: <Details />,
        },
      ],
    },
    { path: "/dashboard", element: <Dashboard /> },
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
