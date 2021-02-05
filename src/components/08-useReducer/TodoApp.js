import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
//import { useForm } from '../../hooks/useForm';

import './styles.css'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
//estado inicial de la aplicaciíon , ademas usamos el useForm customhook creado 
//con anterioridad(Todos en local storage)

const init = () => {

	return JSON.parse(localStorage.getItem('todos')) || [];

	// return [{
	// 	id: new Date().getTime(),
	// 	desc: 'Aprender React',
	// 	done: false
	// }]

}
//Componente con useReducer que recive un todoReducer
export const TodoApp = () => {

	const [todos, dispatch] = useReducer(todoReducer, [], init);
	//useForm destructuramos los valores formValues y handleInputChange


	//este useEffect grava en local storage cunado los todos cambian
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const handleDelete = (todoId) => {

		const actionDel = {
			type: 'delete',
			payload: todoId
		}

		dispatch(actionDel);
	}

	const handleToogle = (todoId) => {
		dispatch({
			type: 'toggle',
			payload: todoId
		});
	}

	const handleAddTodo = (newTodo) => {

		dispatch({
			type: 'add',
			payload: newTodo
		});

	}

	return (
		<div>
			<h1>Todo App({todos.length})</h1>
			<hr />

			<div className="row">
				<div className="col-6">
					<TodoList
						todos={todos}
						handleDelete={handleDelete}
						handleToogle={handleToogle}
					/>
				</div>

				<div className="col-6">
					<TodoAdd
						handleAddTodo={handleAddTodo}
					/>
				</div>

			</div>

		</div>
	)
}
