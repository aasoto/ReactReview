import { useEffect, useRef } from "react";
import { useForm } from "./customHook/useForm"

export const FormComponent = () => {

    const emailRef = useRef();

    const { username, email, password, onInputChange } = useForm({
        username: '',
        email: '',
        password: '',
    });

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(username, email, password);
    }

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    return (
        <form onSubmit={ onSubmit }>
            <input
                name="username"
                type='text'
                className='border border-gray-400 rounded-lg m-2 px-4 py-2 placeholder:italic'
                placeholder='Username'
                value={username}
                onChange={onInputChange}
            />
            <input
                ref={emailRef}
                name="email"
                type='text'
                className='border border-gray-400 rounded-lg m-2 px-4 py-2 placeholder:italic'
                placeholder='Email'
                value={email}
                onChange={onInputChange}
            />
            <input
                name="password"
                type='password'
                className='border border-gray-400 rounded-lg m-2 px-4 py-2 placeholder:italic'
                placeholder='Password'
                value={password}
                onChange={onInputChange}
            />
            <button 
                className="bg-blue-600 text-white mx-3 my-2 px-3 py-2 font-semibold rounded"
                type="submit"
            >
                Guardar
            </button>
        </form>
    )
}
