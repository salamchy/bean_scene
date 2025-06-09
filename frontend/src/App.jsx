import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import AdminDashboard from "./admin/pages/Dashboard";
import ProtectedRoute from "./admin/components/protectedRoute";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    // {
    //   path: '/admin',
    //   element: <AdminLayout />,
    //   children: [
    //     {
    //       path: "/admin/carousels",
    //       element: <CarouselAdmin />,
    //     },
    //   ]
    // },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute adminOnly={true}>
          <AdminDashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
