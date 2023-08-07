import { useCallback, useState } from "react";
import { Increment } from "./Increment";

export const CallbackComponent = () => {

    const [counter, setCounter] = useState(0);

    // se usa para memorizar métodos enteros
    const incrementFather = useCallback(
        (val) => {
            // se debe usar una variable diferente para invocar la que está implicita en el setCounter
            setCounter(c => c + val);
        }, [],
    )

    return (
        <>
            <h1 className="text-3xl font-bold m-4">Contador: {counter}</h1>
            <Increment increment={incrementFather}/>
        </>
    )
}
