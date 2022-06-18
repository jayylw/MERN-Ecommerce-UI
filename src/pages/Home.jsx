import React from 'react';
import Slider from '../components/Silder';
import Announcement from '../components/Announcements';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import { Newletter } from '../components/Newletter';

function Home() {
    return (
        <>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newletter />
        </>
    );
}

export default Home;
