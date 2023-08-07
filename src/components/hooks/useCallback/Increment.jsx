import React from "react";

export const Increment = React.memo(({ increment }) => {

    console.log('Me estoy redibujando');

    return (
        <button
            className="bg-blue-600 text-white mx-3 my-2 px-3 py-2 font-semibold rounded"
            onClick={() => increment(10)}
        >
            Incrementar
        </button>
    )
});
