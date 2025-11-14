import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='min-h-[60vh] flex justify-center items-center '>
            <PropagateLoader size={20}/>
        </div>
    );
};

export default Loading;