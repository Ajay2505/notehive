// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { Provider } from "react-redux";
// import { store } from './store';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Provider store={store}><App /> </Provider>);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <>
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
      <App />
    </>
  </Provider>
);
