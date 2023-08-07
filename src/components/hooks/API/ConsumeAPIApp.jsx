import React, { useState } from 'react'
import { DataList } from './DataList';

export const ConsumeAPIApp = () => {
    const [endPoint, setEndPoint] = useState('users');

    return (
        <>
        <div className='mx-5 my-3 flex justify-start items-center gap-3'>
            <button
                onClick={() => setEndPoint('users')} 
                className="bg-green-600 text-white px-3 py-2 font-semibold rounded"
            >
                Users
            </button>
            <button
                onClick={() => setEndPoint('posts')} 
                className="bg-blue-600 text-white px-3 py-2 font-semibold rounded"
            >
                Posts
            </button>
        </div>
        <DataList endPoint={endPoint}/>
        </>
    )
}
