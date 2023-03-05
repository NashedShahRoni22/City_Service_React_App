import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../compopnents/Shared/Footer';
import Header from '../compopnents/Shared/Header';


const Main = () => {
    return (
        <main>
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
    );
};

export default Main;