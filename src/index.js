import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './root';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Context from './Context';
import { ThemeProvider } from '@material-tailwind/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <BrowserRouter>
            <Context>
                <Root />
            </Context>
        </BrowserRouter>
    </ThemeProvider>
);
