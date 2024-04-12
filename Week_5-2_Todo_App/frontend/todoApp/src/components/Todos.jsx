import PropTypes from 'prop-types';
import { useState } from 'react';

function TodoItems({todo}){
    const [status, setStatus] = useState('Not Completed');
    return (
    <> 
            <div>Title: {todo.title}</div><br />           
            <div>Description: {todo.description}</div><br />
            <button onClick={()=> {
                setStatus(prevStatus=>{
                    if(prevStatus==='Not Completed')
                    {
                        todo.completed ='Completed';
                        return todo.completed;
                    }
                    else{
                        todo.completed='Not Completed'
                        return todo.completed;
                    }
                })
            }}>{status==='Completed'? "Completed" : "Mark as Complete" }</button><br /><br />     
    </>
);
}

export function Todos({todos}){
    return <>
        {todos.map((todo, index) =><TodoItems key={index} todo ={todo} />)}
    </>
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
};

TodoItems.propTypes = {
    todo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.string.isRequired
    }).isRequired
};

// Todos.propTypes = {
//     todos: PropTypes.array.isRequired
// };
