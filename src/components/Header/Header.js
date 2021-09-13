import React from 'react';
import me from '../../imgs/at1.png';
import './Header.css'

const Header = () => {
    return (
            <section class="row p-5" style={{minHeight: '400px'}}>
                <div class="col-md-6 col-sm-12">
                    <h1 className='text-light'>HELLO, I'M</h1>
                    <h1 className="text-light">ABU TAHER</h1>
                    <div className="my-2">
                        <span style={{color: 'tomato', fontSize: '20px'}}>Web Developer ||</span>
                    <span style={{ color: 'tomato', marginLeft: "15px", fontSize: '20px' }}>JavaScript ||</span>
                    <span style={{ color: 'tomato', marginLeft: "15px", fontSize: '20px' }}>ReactJs ||</span>
                    <span style={{ color: 'tomato', marginLeft: "15px", fontSize: '20px' }}>NodeJs</span>
                    </div>
                    <p className='text-light my-4'>
                        I could work without stress the last time. Also, I can stick with one thing.
                        I have expect knowledge and proficiency in Javascript, ReactJs, NodeJs and mobile responsive web development, as well as strong 
                        skills and ability writing clean and efficient code.
                    </p>
                    <a className='mr-2' href="/contact"><span className='btn btn-success'>Get Touch</span></a>
                <a target="_blank" href="https://drive.google.com/file/d/1ELbABuG2B0O598yLndH8_rUXhohxuGFQ/view?usp=sharing"><span className='btn btn-danger' style={{ marginLeft: "20px" }}>Get Resume</span></a>
                </div>
                <div class="col-md-6 col-sm-12">
                <img src={me} className='img-fluid headerImg' style={{ width: '300px' }} alt="" />
                </div>
            </section>
    );
};

export default Header;