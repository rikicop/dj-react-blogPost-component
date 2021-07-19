import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

const Todo = () => {
    const [todo, setTodo] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            axios
                .get("http://192.168.43.129:8000/api/")
                .then((res) => {
                    setTodo(res.data)
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err)
                    setError(err)
                    setLoading(false)
                });
        }, 1000);
    }, []);

    return (
        <Fragment>
            <h1>Lista</h1>
            {loading ? <p> Loading... </p> : (
            <>
                {todo.map((frase) => (
                    <div key={frase.id}>
                        <h1>{frase.title}</h1>
                        <p>{frase.body}</p>
                    </div>
                ))}
            </>
            )}
            {error ? <p style={{ color:'red'}}>Error de conexión</p> : null}
        </Fragment>
    )
}

export default Todo
