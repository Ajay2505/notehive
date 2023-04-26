
import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
const Auth = lazy(() => import("./pages/Auth"));
const Home = lazy(() => import("./pages/Home"));
const Loader = lazy(() => import("./components/Loader"));


const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader />}>
          <Auth />
        </Suspense>
      ),
    },
    {
      path: "home",
      element: (
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

