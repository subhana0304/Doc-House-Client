import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const onSubmit = data => {
        console.log(data);
        
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name)
            .then(()=>{
                console.log('User Profile Updated');
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Sign Up',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch(error => console.log(error))

            
              navigate('/');
        })
      }


    return (
        <>
        <Helmet>
                <title>Doc-House || Sign Up</title>
            </Helmet>
        <div className='md:flex'>
            <div className='w-full md:w-1/2'>
                <img src="../../public/sideimg.png" alt="" />
            </div>
            <div className='flex justify-center items-center mx-auto py-10'>
                <div className='border p-10 rounded'>
                    <h3 className='font-bold text-xl text-center mb-2'>Sign Up to Doc House</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Enter your Name</span>
                        </label>
                        <input type="text" {...register("name",  { required: true })} placeholder="Name" className="input input-bordered" />
                        {errors.name && <span className='text-red-600'>Name field is required</span>}
                    </div>
                    <div className="form-control  mb-2">
                        <label className="label">
                            <span className="label-text">Enter your User Name</span>
                        </label>
                        <input type="text" {...register("userName",  { required: true })} placeholder="userName" className="input input-bordered" />
                        {errors.userName && <span className='text-red-600'>User Name field is required</span>}
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email",  { required: true })} placeholder="Enter your Email" className="input input-bordered" />
                        {errors.email && <span className='text-red-600'>Email field is required</span>}
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",  { required: true })} placeholder="Enter Your Password" className="input input-bordered" />
                        {errors.password && <span className='text-red-600'>Password field is required</span>}
                    </div>
                    <input className='btn bg-[#F7A582] border-[#F7A582] w-full text-white hover:bg-[#faa27c] hover:border-[#F7A582]  my-2' type="submit" value="Create Account" />
                    <p>Already Register? Go to <Link className='text-[#F7A582]' to='/login'>Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default SignUp;