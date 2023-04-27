
import { Suspense, lazy, startTransition } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loader } from "./pages/Auth";

const Auth = lazy(() => import("./pages/Auth"));
const Home = lazy(() => import("./pages/Home"));
const Loader = lazy(() => import("./components/UI/Loader"));

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      loader: startTransition(loader),
      element: (
        <Suspense fallback={<Loader />}>
          <Auth />
        </Suspense>
      ),
    },
    {
      path: "home",
      element: (
        <Suspense fallback={<h1>Loading...</h1>}>
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
        autoClose={1300}
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

