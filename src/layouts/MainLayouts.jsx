import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/Navbar';

const MainLayouts = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <ToastContainer />
        </div>
    )
}

export default MainLayouts