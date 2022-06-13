import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TOS from './TOS';
import PrivacyPolicy from './PrivacyPolicy';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<div className="text-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Page not found</div>} />
            <Route path="/tos" element={<TOS/>} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
    </BrowserRouter>

);
