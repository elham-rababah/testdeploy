import React from 'react';
import TodoListActions from './TodoListActions';


export default class TodoList extends React.Component {
    constructor() {
        super();
        
    }


    render() {
        return (
            <div>
                TodoList
                 <TodoListActions/>
            </div>
        );
    }
}