import './bootstrap';
import './config';

// Import the necessary libraries
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';

// Import the necessary React and ReactDOM libraries
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { AuthProvider } from './AuthContext';

// Axios instance for API calls
import axiosInstance from './axios';

// global variables
window.Inertia = Inertia;
window.Link = Link;
window.$ = $;
window.bootstrap = bootstrap;
window.axios = axiosInstance;


// Create the Inertia app
createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        return pages[`./Pages/${name}.jsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <AuthProvider>
                <App {...props} />
            </AuthProvider>)
    },
})