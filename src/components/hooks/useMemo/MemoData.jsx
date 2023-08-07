import { useMemo, useState } from "react";

export const MemoData = () => {

    const [numbersList, setNumbersList] = useState([2, 3, 4, 5, 6, 7, 8, 9]);
    const [show, setShow] = useState(true);

    /**
     * se usa para memorizar variables en caso de que se renderice el componente
     */
    const calculate = (numbersList) => useMemo(() => {
        console.log('calculando');
        return numbersList.reduce((a, b) => a * b);
    }, [numbersList]);

    const addNumber = () => {
        setNumbersList([...numbersList, numbersList[numbersList.length - 1] + 1]);
        console.log(numbersList);
    }

    return (
        <>
            <h1 className="text-3xl font-bold m-4">Calculo: {calculate(numbersList)}</h1>
            <button 
                className="bg-blue-600 text-white mx-3 my-2 px-3 py-2 font-semibold rounded"
                onClick={() => setShow(!show)}
            >
                { show ? 'Show' : 'Hide' }
            </button>
            <button 
                className="bg-green-600 text-white mx-3 my-2 px-3 py-2 font-semibold rounded"
                onClick={() => addNumber()}
            >
                Agregar número
            </button>
        </>
    )
}
