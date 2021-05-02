import React from 'react';
import Navbar from '../Navbar/Navbar';
import me from '../../imgs/at1.png';
const About = () => {
    return (
        <div className='backgroundColor'>
            <Navbar></Navbar>
            <div className="row p-5">
                <div className="col-md-6 p-4">
                    <img src={me} alt="" style={{width: '300px'}}/>
                    <h2 className='text-light m-4'><span className='text-info'>Hi</span> I'm Abu Taher</h2>
                    <p className='text-light'>
                        A self-motivated and enthusiastic web developer with a deep interest in JavaScript. 
                        To work in the Software industry with modern web technologies of different local & 
                        multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing 
                        responsibilities.
                    </p>
                </div>
                <div className="col-md-6 p-4">
                    <h2 className='text-light'>My Programming Skills</h2>
                    <div className='mt-4'>
                        <span className='btn btn-secondary text-light m-1'>JavaScript</span>
                        <span className='btn btn-secondary text-light m-1'>Node.js</span>
                        <span className='btn btn-secondary text-light m-1'>Express.js</span>
                        <span className='btn btn-secondary text-light m-1'>C</span>
                        <span className='btn btn-secondary text-light m-1'>C++</span>
                        <span className='btn btn-secondary text-light m-1'>React.js</span>
                    </div>
                    <div>
                        <span className='btn btn-secondary text-light m-1'>HTML</span>
                        <span className='btn btn-secondary text-light m-1'>CSS</span>
                        <span className='btn btn-secondary text-light m-1'>Bootstrap</span>
                        <span className='btn btn-secondary text-light m-1'>MongoDB</span>
                        <span className='btn btn-secondary text-light m-1'>Redux.js</span>
                        <span className='btn btn-secondary text-light m-1'>NPM</span>
                    </div>
                    <div>
                        <span className='btn btn-secondary text-light m-1'>REST API</span>
                        <span className='btn btn-secondary text-light m-1'>Firebase</span>
                        <span className='btn btn-secondary text-light m-1'>TypeScript</span>
                        <span className='btn btn-secondary text-light m-1'>SCSS</span>
                        <span className='btn btn-secondary text-light m-1'>MySQL</span>
                    </div>
                    <div className="first">
                        <h2 className='text-light'>I want to work with</h2>
                        <span className='btn btn-secondary text-light m-1'>JavaScript</span>
                        <span className='btn btn-secondary text-light m-1'>React.js</span>
                        <span className='btn btn-secondary text-light m-1'>REST API</span>
                        <span className='btn btn-secondary text-light m-1'>Node.js</span>
                        <span className='btn btn-secondary text-light m-1'>MongoDB</span>
                    </div>
                    <div className="first">
                        <h2 className='text-light'>I prefer not to work with</h2>
                        <span className='btn btn-secondary text-light m-1'>Python</span>
                        <span className='btn btn-secondary text-light m-1'>Wordpress</span>
                        <span className='btn btn-secondary text-light m-1'>PHP</span>
                        <span className='btn btn-secondary text-light m-1'>Django</span>
                        <span className='btn btn-secondary text-light m-1'>Laravel</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;