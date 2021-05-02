import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import me from '../../imgs/at1.png';

const Home = () => {
    return (
        <div className='backgroundColor'>
            <Navbar></Navbar>
            <div className="container">
                <section class="row p-5">
                    <div class="col-md-6">
                        <h1 className='text-light'>HELLO, I'M</h1>
                        <h1 className="text-light">ABU TAHER</h1>
                        <div className="my-2">
                            <span className='text-success'>Web Developer</span>
                            <span className='text-success' style={{ marginLeft: "20px" }}>Programmer</span>
                        </div>
                        <p className='text-light my-4'>A full stack allaround web devloper
                        that placerat in massa consectetur.
                        I enjoy building everything from small business sites to rich interactive web sites.
                        Certificate obtained from Coursera.
                    </p>
                        <a className='mr-2' href="/contact"><span className='btn btn-success'>Get Touch</span></a>
                        <a href="#"><span className='btn btn-danger' style={{ marginLeft: "20px"}}>Get Resume</span></a>
                    </div>
                    <div class="col-md-6">
                        <img src={me} className='img-fluid' style={{ width: '300px', marginLeft: '200px' }} alt="" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;