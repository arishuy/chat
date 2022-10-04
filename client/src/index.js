import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/store";
import { AuthContextProvider } from './store/AuthContent';
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </Provider>
);