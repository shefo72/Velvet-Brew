import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import AppLayout from "./UI/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import OrderConfirmation from "./pages/OrderConfirmation";
import Details from "./pages/Details";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 3 * 60 * 1000, // 3 minutes
      },
    },
  });

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
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
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
