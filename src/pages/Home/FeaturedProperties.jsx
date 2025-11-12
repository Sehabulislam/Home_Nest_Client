import React, { use } from 'react';
import PropertyCard from '../../components/PropertyCard';

const FeaturedProperties = ({propertiesPromise}) => {
    const properties = use(propertiesPromise);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:w-10/12 mx-auto'>
            {
                properties.map(property =><PropertyCard property={property}></PropertyCard> )
            }
        </div>
    );
};

export default FeaturedProperties;