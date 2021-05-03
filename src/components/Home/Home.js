import React from 'react';
import Header from '../Header/Header';
import HomeProjects from '../HomeProjects/HomeProjects';
import Navbar from '../Navbar/Navbar';
import BlogArticles from './BlogArticles';
import Footer from './Footer';
import './Home.css';
import HomeContact from './HomeContact';
const Home = () => {
    return (
        <div className='backgroundColor'>
            <Navbar></Navbar>
            <div className="container">
                <Header></Header>
                <HomeProjects></HomeProjects>
                <BlogArticles></BlogArticles>
                <HomeContact></HomeContact>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;