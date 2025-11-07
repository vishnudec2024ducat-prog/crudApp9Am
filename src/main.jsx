import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux"
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import store from './utility/store.js'
import RoutingArea from './Routes/RoutingArea.jsx'
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RoutingArea/>

   </Provider>
 
)
