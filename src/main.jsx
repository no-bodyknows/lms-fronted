// css import
import './index.css';

// libraires import
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx';
// component import
import store from './Redux/store'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <BrowserRouter >
        <App />
        <Toaster/>
    </BrowserRouter>
    </Provider>
 
)
