import React from 'react';
import { FaSpinner } from "react-icons/fa";

const Loader = () => {
    return (
        <div className='py-20  flex justify-center'>
            <FaSpinner className='text-7xl text-violet-600 animate-spin'/>
        </div>
    );
};

export default Loader;