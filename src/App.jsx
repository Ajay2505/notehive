
import { Suspense, lazy, startTransition } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import { store } from "./helpers/store";
import Loader from "./components/UI/Loader";

const Auth = lazy(() => import("./pages/Auth"));
const Home = lazy(() => import("./pages/Home"));

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      loader: () => import("./pages/Auth").then(module => module.loader()),
      element: (
        <Suspense fallback={startTransition(() => <Loader />)}>
          <Auth />
        </Suspense>
      ),
    },
    {
      path: "home",
      loader: () => import("./pages/Home").then(module => module.loader()),
      element: (
        <Suspense fallback={startTransition(() => <Loader />)}>
          <Home />
        </Suspense>
      ),
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Provider>
  );
  
}

export default App;

