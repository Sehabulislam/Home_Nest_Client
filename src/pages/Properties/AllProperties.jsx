import React, { use } from 'react';
import PropertyCard from '../../components/PropertyCard'
import { HiHomeModern } from "react-icons/hi2";

const propertiesPromise = fetch('http://localhost:3000/allProperties').then(res => res.json())

const AllProperties = () => {
    const properties = use(propertiesPromise);
    // console.log(properties); 
    return (
        <div className='py-5'>
            <h2 className='text-4xl font-bold flex justify-center items-center gap-2'><HiHomeModern size={43}/>All Properties</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-8">
                {
                    properties.map(property =><PropertyCard property={property}></PropertyCard>)
                }
            </div>
        </div>
    );
};

export default AllProperties;