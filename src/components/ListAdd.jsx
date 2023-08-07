import React, { useState } from 'react'

export const ListAdd = ({addTopic}) => {

    const [topic, setTopic] = useState('');
    const [seen, setSeen] = useState(false);

    const seenOptions = [
        {name: 'visto', value: 1}, 
        {name: 'no visto', value: 0},
    ];

    const onInputChange = (event) => {
        switch (event.target.name) {
            case 'topic':
                setTopic(event.target.value);
                break;
            case 'seen':
                if (event.target.value == '0') {
                    setSeen(false);
                } else {                    
                    setSeen(true);
                }
                break;
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTopic(topic, seen);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='flex justify-start items-center m-2 gap-2'>
                <input
                    name="topic" 
                    id="topic"
                    type='text'
                    className='border border-gray-400 rounded-lg px-4 py-2 placeholder:italic'
                    placeholder='Nuevo tema'
                    value={topic}
                    onChange={onInputChange}
                />
                <select 
                    name="seen" 
                    id="seen"
                    className='border border-gray-400 rounded-lg px-4 py-2 placeholder:italic'
                    value={seen}
                    onChange={onInputChange}
                >
                    <option value="" key={0}>Seleccionar...</option>
                    {seenOptions.map(item => <option value={item.value} key={item.name}>{item.name}</option>)}
                </select>
            </div>
        </form>
    )
}
