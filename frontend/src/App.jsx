import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';

const App = () => {
 const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      // children: [
      //   {
      //     index: true,
      //     element: <Home />,
      //   },
        // {
        //   path: '/cart',
        //   element: (
        //     <ProtectedRoute>
        //       <CartItems />
        //     </ProtectedRoute>
        //   )
        // }
      // ]
    },
    // {
    //   path: '/admin',
    //   element: <AdminLayout />,
    //   children: [
    //     {
    //       path: "/admin/carousels",
    //       element: <CarouselAdmin />,
    //     },
    //     {
    //       path: "/admin/upload-carousel",
    //       element: <CarouselUpload />,
    //     },
    //   ]
    // },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App