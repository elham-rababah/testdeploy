import React from 'react';
import TodoListActions from './TodoListActions';


export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.deleteListAction = this.deleteListAction.bind(this);
        this.updateHeaderAction = this.updateHeaderAction.bind(this);
        this.updateItemsAction = this.updateItemsAction.bind(this);
        
    }
    
    deleteListAction (id){
        this.props.deleteListAction(id);
    }

    updateHeaderAction (event) {
        //console.log("event.target.value",this.props.id);
        this.props.list.title = event.target.value;
        this.props.updateListAction(this.props.id,this.props.list);
    }

    updateItemsAction (id,event) {
        console.log(event.target.value,id);
        this.props.list.items.splice(id,1);
        this.props.list.items.splice(id,0,event.target.value);
        //this.props.list.title = event.target.value;
        this.props.updateListAction(this.props.id,this.props.list);
    }

    render() {
        //console.log(this.props.list)
        var currentThis = this;
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
                    {this.props.list.items.map(function(item,i){
                        return <input value={item}  onChange ={(e) => currentThis.updateItemsAction(i, e)}/>
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