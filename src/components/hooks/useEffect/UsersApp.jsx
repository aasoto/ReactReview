import React, { useState } from 'react'
import { UsersList } from './UsersList';

export const UsersApp = () => {

    const [endpoint, setEndpoint] = useState('users');

    return (
        <>
        <div className='mx-5 my-3 flex justify-start items-center gap-3'>
            <button
                onClick={() => setEndpoint('users')} 
                className="bg-green-600 text-white px-3 py-2 font-semibold rounded"
            >
                Users
            </button>
            <button
                onClick={() => setEndpoint('posts')} 
                className="bg-blue-600 text-white px-3 py-2 font-semibold rounded"
            >
                Posts
            </button>
        </div>
        <UsersList endPoint={endpoint}/>
        </>
    )
}
