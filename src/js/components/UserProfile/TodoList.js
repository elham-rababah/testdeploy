import React from 'react';
import TodoListActions from './TodoListActions';


export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.deleteListAction = this.deleteListAction.bind(this);
        this.updateHeaderAction = this.updateHeaderAction.bind(this);
        
    }
    
    deleteListAction (id){
        this.props.deleteListAction(id);
    }

    updateHeaderAction (event) {
        //console.log("event.target.value",this.props.id);
        this.props.list.title = event.target.value;
        this.props.updateHeaderAction(this.props.id,this.props.list);
    }

    render() {
        //console.log(this.props.list)
        return (
            <div class="">
                <div class="card">
                
                    <input 
                        class="thumb card-header"  
                        value={this.props.list.title} 
                        style={{background: "green"}}
                        onChange ={this.updateHeaderAction}
                        />
          
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