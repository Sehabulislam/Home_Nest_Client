import React from 'react';
import { useNavigate } from 'react-router';

const Error404 = () => {
    const navigate = useNavigate();
    return (
        <div>
           <div className='py-5'>
            <img src="https://static.vecteezy.com/system/resources/previews/007/162/540/non_2x/error-404-page-not-found-concept-illustration-web-page-error-creative-design-modern-graphic-element-for-landing-page-infographic-icon-free-vector.jpg" alt="" className='w-200 mx-auto'/>
           </div>
           <div className='text-center'>
            <h1 className='text-6xl font-bold'>Page Not Found..!!</h1>
            <button onClick={()=>navigate('/')} className='btn btn-neutral hover:bg-white hover:text-black mt-5'>Back Home</button>
           </div>
        </div>
    );
};

export default Error404;