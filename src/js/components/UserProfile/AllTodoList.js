import React from 'react';
import TodoList from './TodoList';


export default class AllTodoList extends React.Component {
    constructor() {
        super();   
    }


    render() {
        return (
            <div>
                AllTodoList
                <TodoList/>
            </div>
        );
    }
}