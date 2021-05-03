import React from 'react';

const Footer = () => {
    return (
        <div className="py-4">
            <hr className='text-light' style={{ height: '3px' }} />
            <p className='text-center text-light'>Build & design By <span style={{color: 'tomato'}}>Abu Taher</span></p>
            <p className='text-center text-light'>Fellow me <a target='_blank' href="https://github.com/Taher-39"><span className='btn btn-success'>GitHub</span></a> <a target='_blank' href="https://www.linkedin.com/in/taher39/"><span className='btn btn-danger'>Linkedin</span></a></p>
        </div>
    );
};

export default Footer;