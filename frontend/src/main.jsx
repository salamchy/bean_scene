import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './app/Store.js'
import {ToastContainer} from "react-toastify";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToastContainer position="top-right" autoClose={3000} />
    <App />
  </Provider>,
)
