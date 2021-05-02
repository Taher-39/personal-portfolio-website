import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Navbar/Navbar';
import './Contact.css'
const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div className='backgroundColor'>
            <Navbar></Navbar>
            <div className='d-flex justify-content-center'>
                <div style={{width: '600px'}} className='bg-light p-4 mt-5 shadow rounded'>
                    <h2 className='text-center text-secondary'>Get In touch</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <input placeholder="Your Name *" name='name' className='form-control' {...register("name", { required: true })} />
                            {errors.name && <span className='text-danger'>This field is required</span>}
                        </div>

                        <div className="form-group mb-3">
                            <input placeholder="Your email *" name='email' className='form-control' {...register("email", { required: true })} />
                            {errors.email && <span className='text-danger'>This field is required</span>}
                        </div>

                        <div className="form-group mb-3">
                            <textarea placeholder="Description *" name='description' className='form-control' cols="10" rows='5' {...register("description", { required: true })} />
                            {errors.description && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="form-group text-center">
                            <button className="btn btn-success form-control w-50 text-light" type='submit'>Submit</button>
                        </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;