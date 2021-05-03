import React from 'react';

const HomeContact = () => {
    return (
        <div class="p-3" style={{ minHeight: '200px' }}>
            <h2 className='text-center text-light'>Get In Touch</h2>
            <p className='text-light'>I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. I'll try my best to get back to you!</p>
            <div className="text-center">
                <a href="/contact">
                    <button className="btn btn-danger text-light">Contact</button>
                </a>
            </div>
        </div>
    );
};

export default HomeContact;