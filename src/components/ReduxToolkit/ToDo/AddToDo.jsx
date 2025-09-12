import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './toDoSlice';

export default function AddToDo() {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim().length > 0) {
            dispatch(addTodo(input));
            setInput('');
        }
    }

    return (
        <form onSubmit={addTodoHandler} >

            <input
                type="text"
                className='form-control'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter a ToDo' />

            <button type='submit'
                className='btn btn-primary'
            >Add</button>

        </form>
    )
}
