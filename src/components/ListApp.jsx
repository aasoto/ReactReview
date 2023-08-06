import { useState } from "react";

const Item = ({topic, seen}) => {
    return (
        <li>{topic} {seen ? '✔' : '❌'}</li>
    );
}

export const ListApp = () => {

    const [topics, setTopics] = useState([
        {topic: 'Instaciones', seen: true},
        {topic: 'Uso de Vite', seen: true},
        {topic: 'Componentes', seen: true},
        {topic: 'Variables en JSX', seen: false},
        {topic: 'Props', seen: false},
    ]);

    const [counter, setCounter] = useState(0);

    const addTopic = () => {
        setTopics([...topics, {topic: counter, seen: false}]);
    }

    return (
        <>
            <h1 className="text-3xl font-bold">Temas: </h1>
            <ol>
                {
                    topics.map(item => {
                        return <Item topic={item.topic} seen={item.seen} key={item.topic}/>
                    })
                }
            </ol>
            <button
                onClick={() => {setCounter(counter + 1); addTopic()}} 
                className="bg-blue-600 text-white mx-3 my-2 px-3 py-2 font-semibold rounded"
            >
                Nuevo tema {counter}
            </button>
        </>
    )
}
