import React from 'react';
import TodoListActions from './TodoListActions';


export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.deleteListAction = this.deleteListAction.bind(this);
        
    }
    
    deleteListAction (id){
        this.props.deleteListAction(id);
    } 

    render() {
        return (
            <div class="">
                <div class="card">
                <div class="thumb" style={{background: "green"}}>
                    <h1>{this.props.list.title}</h1>
                </div>
                    <article>
                    {this.props.list.items.map(function(item){
                        return <li>{item}</li>
                    })}
                    <li>Add New Item</li>
                    <span>{this.props.list.createdDate}</span>
                    <TodoListActions id={this.props.id} list={this.props.list} deleteListAction={this.deleteListAction}/>
                    </article>
                </div>
            </div>
           
        );
    }
}