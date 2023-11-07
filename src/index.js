import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { persistor, store } from './redux/store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import axios from 'axios';
axios.defaults.baseURL = "https://youtube-backend-master.onrender.com/api/"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);


// timeago.js - to get the details of uploaded time of the video
// redux persist - to retain the access_token & user even if we refresh the page
// redux > persistedReducer > Middleware > persistStore
// firebase - to signin with google account

