import React from 'react';
import TodoListActions from './TodoListActions';


export default class TodoList extends React.Component {
    constructor() {
        super();
        
    }


    render() {
        return (
            
            <div class="">
                <div class="card">
                <div class="thumb" style={{background: "green"}}>
                    <h1>List Title</h1>
                </div>
                    <article>
                    <li>How to Conduct Remote Usability Testing</li>
                    <li>How to Conduct Remote Usability Testing</li>
                    <li>Add New Item</li>
                    <span>Harry Brignull</span>
                    </article>
                </div>
            </div>
           
        );
    }
}