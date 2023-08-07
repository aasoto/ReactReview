import { useState } from "react";
import { ListAdd } from "./ListAdd";

const Item = ({topic, seen}) => {
    return (
        <li>{topic} {seen ? '✔' : '❌'}</li>
    );
}

export const ListApp = () => {

    const [topics, setTopics] = useState([
        {id: 1, topic: 'Instaciones', seen: true},
        {id: 2, topic: 'Uso de Vite', seen: true},
        {id: 3, topic: 'Componentes', seen: true},
        {id: 4, topic: 'Variables en JSX', seen: false},
        {id: 5, topic: 'Props', seen: false},
    ]);

    const onAddTopic = (topic, seen) => {
        if (topic < 1) return;
        setTopics([...topics, {id: topics.length + 1, topic: topic.trim(), seen: seen}]);
    }

    return (
        <>
            <ListAdd addTopic={onAddTopic}/>
            <h1 className="text-3xl font-bold">Temas: </h1>
            <ol>
                {
                    topics.map(item => {
                        return <Item topic={item.topic} seen={item.seen} key={item.id}/>
                    })
                }
            </ol>
            {/* <button
                onClick={() => {setCounter(counter + 1); addTopic()}} 
                className="bg-blue-600 text-white mx-3 my-2 px-3 py-2 font-semibold rounded"
            >
                Nuevo tema {counter}
            </button> */}
        </>
    )
}
