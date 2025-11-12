import React from 'react';
import { BsSearchHeart } from 'react-icons/bs';
import { PiCubeTransparentFill } from 'react-icons/pi';
import { VscWorkspaceTrusted } from 'react-icons/vsc';

const WhyChoose = () => {
    return (
        <div className='grid md:grid-cols-2 items-center max-w-5xl mx-auto py-10 gap-5'>
            <div>
                <img src="https://www.indiafilings.com/learn/wp-content/uploads/2015/10/Real-Estate-Agent-Business-India.jpg" alt="" className='w-full object-cover h-130 rounded-2xl md:rounded-l-xl'/>
            </div>
            <div className='p-2'>
                <h1 className='text-4xl font-bold'>Why choose us ?</h1>
                <p className='text-gray-500'>We afe providing the best services for you, because we believe that having a good home can greatly improve the quality of your life.</p>
                <div className="mt-5 space-y-2">
                    <div>
                    <h1 className='flex items-center gap-2 text-2xl font-semibold'><VscWorkspaceTrusted size={35}/>Trusted Property Listings</h1>
                    <p className='text-gray-500 ml-8 mt-1'>All our properties are verified and come from reliable sources, ensuring you find your dream home or land with complete confidence.</p>
                </div>
                 <div>
                    <h1 className='flex items-center gap-2 text-2xl font-semibold'><PiCubeTransparentFill size={35}/>Transparent Deals</h1>
                    <p className='text-gray-500 ml-8 mt-1'>We maintain full transparency in every transaction — no hidden charges, no misleading information. You know exactly what you’re getting.</p>
                </div>
                 <div>
                    <h1 className='flex items-center gap-2 text-2xl font-semibold'><BsSearchHeart size={35}/>Smart Search & Filters</h1>
                    <p className='text-gray-500 ml-8 mt-1'>Easily find your ideal property by filtering based on location, budget, or property type — fast, simple, and hassle-free.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;