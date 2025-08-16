// css import
import './index.css';

// libraires import
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// component import
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
        <Toaster/>
    </BrowserRouter>
 
)
