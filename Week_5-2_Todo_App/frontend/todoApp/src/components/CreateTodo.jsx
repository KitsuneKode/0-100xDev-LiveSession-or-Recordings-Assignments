import { useState } from "react";
import PropTypes from 'prop-types';

export function CreateTodo(props){
    const [title , setTitle] = useState('');
    const [description , setDescription] = useState('');

    return <>
    <input style={{
        padding: 2,
        marginLeft:15
    }} type="text" placeholder="title" onChange={(text)=>{
        const title = text.target.value;
        setTitle(title);
    }} /><br /><br />
    <input style={{
        padding: 7,
        paddingLeft: 2,
        marginLeft:15
    }} type="text" placeholder="description" onChange={(text)=>{
        const description = text.target.value;
        setDescription(description);
    }}/><br /><br />
    <button style={{
        padding: 2,
        marginLeft:15
    }} onClick={async()=>{
        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                title,
                description,
            }),
            headers: {
                "Content-type": "application/json",
            },
        }).then(async (response) => {
            const json = await response.json();
            alert("Added todo", json);
            console.log("control reached before setTodos")
        CreateTodo.propTypes = {
            setTodos: PropTypes.func.isRequired,
        };

        });
        props.setTodos(todos => [...todos, { title, description }]);
        
    }}>Add todo</button><br />
    </>
}