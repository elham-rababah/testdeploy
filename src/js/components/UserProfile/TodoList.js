import React from 'react';
import TodoListActions from './TodoListActions';
import TodoListItems from './TodoListItems';
import TodoListHeader from './TodoListHeader';


export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newitem:''
        }

        this.deleteListAction = this.deleteListAction.bind(this);
        this.updateHeaderAction = this.updateHeaderAction.bind(this);
        this.updateItemsAction = this.updateItemsAction.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        
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

    handleKeyPress (event) {
       var currentThis =this;
       if (event.key === 'Enter') {
            event.preventDefault();
            this.props.list.items.push(currentThis.state.newitem);
            this.props.updateListAction(this.props.id,this.props.list);
            currentThis.setState({newitem:''});

      }else{
        console.log(event.key);
        currentThis.setState({newitem:currentThis.state.newitem+event.key});

      }
    }

    render() {
        //console.log(this.props.list)
        var currentThis = this;
        return (
            <div class="">
                <div class="card">
                    <TodoListHeader  list={this.props.list} updateHeaderAction={currentThis.updateHeaderAction}/>
          
                    <article>
                        <TodoListItems id={this.props.id} list={this.props.list} updateItemsAction={currentThis.updateItemsAction} handleKeyPress ={this.handleKeyPress} newitem={this.state.newitem}/>
                        <span>{this.props.list.createdDate}</span>
                        <TodoListActions id={this.props.id} list={this.props.list} deleteListAction={this.deleteListAction}/>
                    </article>
                </div>
            </div>
           
        );
    }
}