import { useCounter } from "./customHooks/useCounter"

export const CounterComponent = () => {

    const {counter, decrement, increment, reset} = useCounter(0);

    return (
        <>
            <h1 className="text-3xl font-bold m-4">Contador en: {counter}</h1>
            <div className="flex justify-start items-center gap-3">
                <button 
                    className="bg-blue-600 text-white mx-3 my-2 px-3 py-2 font-semibold rounded"
                    onClick={() => decrement()}
                >
                    Decrement
                </button>
                <button 
                    className="bg-red-600 text-white mx-3 my-2 px-3 py-2 font-semibold rounded"
                    onClick={() => reset()}
                >
                    Reset
                </button>
                <button 
                    className="bg-blue-600 text-white mx-3 my-2 px-3 py-2 font-semibold rounded"
                    onClick={() => increment()}
                >
                    Increment
                </button>
            </div>
        </>
    )
}
