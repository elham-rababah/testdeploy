import React from 'react';
import TodoListActions from './TodoListActions';


export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.list.title,
            items: this.props.list.items,
            createdDate: this.props.list.createdDate ,
            _id: this.props.list._id,
            userid: this.props.list.userid,

        }
        
    }


    render() {
        return (
            <div class="">
                <div class="card">
                <div class="thumb" style={{background: "green"}}>
                    <h1>{this.state.title}</h1>
                </div>
                    <article>
                    {this.state.items.map(function(item){
                        return <li>{item}</li>
                    })}
                    <li>Add New Item</li>
                    <span>{this.state.createdDate}</span>
                    </article>
                </div>
            </div>
           
        );
    }
}