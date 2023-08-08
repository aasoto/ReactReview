import { useReducer } from "react";
import { useForm } from "../useForm/customHook/useForm";

const initialState = [{
    id: new Date().getTime(),
    task: 'Explicar Reducers',
    ended: false,
}];

const taskReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TASKS] Add task':
            return [...state, action.payload];
        case '[TASKS] End task':
            return state.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        ended: !task.ended
                    }
                }
                return task;
            });
        case '[TASKS] Delete task':
            state = state.filter(task => task.id !== action.payload);
            return state;
        case '[TASKS] Drop tasks':
            return [];
        default:
            return state;
    }
}


export const TasksList = () => {

    const [state, dispatch] = useReducer(taskReducer, initialState);

    const { task, onInputChange } = useForm({
        task: '',
    });

    const addTask = (event) => {
        event.preventDefault();
        if (task === '') return;
        const newTask = {
            id: new Date().getTime(),
            task: task,
            ended: false,
        }
        const action = {
            type: '[TASKS] Add task',
            payload: newTask,
        }
        dispatch(action);
    }

    const endTask = ({ id }) => {
        const action = {
            type: '[TASKS] End task',
            payload: id,
        }
        dispatch(action);
    }

    const deleteTask = ({ id }) => {
        const action = {
            type: '[TASKS] Delete task',
            payload: id,
        }
        dispatch(action);
    }

    const dropTasks = () => {
        const action = {
            type: '[TASKS] Drop tasks',
            payload: '',
        }
        dispatch(action);
    }

    return (
        <>
            <form onSubmit={addTask}>
                <div className='flex justify-start items-center m-2 gap-2'>
                    <input
                        name="task"
                        type='text'
                        className='border border-gray-400 rounded-lg px-4 py-2 placeholder:italic'
                        placeholder='Nuevo tema'
                        value={task}
                        onChange={onInputChange}
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white mx-3 my-2 px-3 py-2 font-semibold rounded"
                    >
                        Agregar
                    </button>
                    <button
                        type="button"
                        className="bg-red-600 text-white mx-3 my-2 px-3 py-2 font-semibold rounded"
                        onClick={dropTasks}
                    >
                        Eliminar todas
                    </button>
                </div>
            </form>
            <ul className="m-2 border rounded-md border-gray-400 p-2 w-auto">
                {
                    state.map(task => {
                        return (
                            <li key={task.id} className="px-5 py-2 border-b border-gray-400 flex justify-between items-center">
                                <div className="flex justify-start items-center gap-2">
                                    <span>{task.task}</span>
                                    {task.ended ? '✔' : '❌'}
                                </div>
                                <div className="flex justify-start items-center gap-2">
                                    <button 
                                        className="bg-red-600 text-white mx-3 my-2 px-3 py-2 font-semibold rounded"
                                        onClick={() => deleteTask(task)}
                                    >
                                        🗑
                                    </button>
                                    <input type="checkbox" value={task.ended} onChange={() => endTask(task)} />
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    )
}
