import React from 'react';
import TodoList from './TodoList';


export default class AllTodoList extends React.Component {
    constructor() {
        super();   
    }


    render() {
        return (
            <div>
                <header>
                    <h1>My ToDo Lists</h1>
                </header>
                <div class="band">
                    <TodoList/>
                    <TodoList/>
                    <TodoList/>
                    <TodoList/>
                    <TodoList/>
                </div>
            </div>
        );
    }
}