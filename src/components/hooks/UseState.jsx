import { useState } from "react"

export const UseState = ({ value }) => {

    const [counter, setCounter] = useState(value);

    return (
        <>
            <h1 className="text-3xl pl-5">{ 'Número: ' + counter }</h1>
            <button 
                onClick={() => setCounter(counter + 1)} 
                className="bg-blue-600 text-white mx-3 my-2 px-3 py-2 font-semibold rounded"
            >
                Incrementar
            </button>
        </>
    )
}
