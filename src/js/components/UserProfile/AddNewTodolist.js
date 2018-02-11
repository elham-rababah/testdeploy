import React from 'react';
import TodoListActions from './TodoListActions';
import TodoListItems from './TodoListItems';
import TodoListHeader from './TodoListHeader';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';


export default class AddNewTodolist extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            newitem :''
        }

        this.updateHeaderAction = this.updateHeaderAction.bind(this);
        this.AddList = this.AddList.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        
    }

    updateHeaderAction (event) {
        this.props.updateNewListAction(event.target.value,'title')
    }

    AddList (event) {
        var currentThis = this ;
        event.preventDefault();
        axios.post('/api/list/createlist', this.props.list)
        .then(function (res) {
            alert ('New List Add successfully')
            currentThis.props.addListAction(res.data);

        })
        .catch(function (err) {
            //TODO better apperance for  Error 
            alert(err);
        })
    }

    handleKeyPress (event) {
       var currentThis =this;
       if (event.key === 'Enter') {
            event.preventDefault();
            this.props.updateNewListAction(currentThis.state.newitem,'items');
            currentThis.setState({newitem:''});

      }else{
        currentThis.setState({newitem:currentThis.state.newitem+event.key});

      }
    }

    render() {
        var currentThis = this;
        return (
            <div class="">
                <div class="card">
                    <TodoListHeader  list={this.props.list} updateHeaderAction={currentThis.updateHeaderAction}/>
                    <article>
                        <TodoListItems id={this.state.id} list={this.props.list} updateItemsAction={currentThis.updateItemsAction} handleKeyPress ={this.handleKeyPress} newitem={this.state.newitem}/>
                        <div class="card-footer" onClick={this.AddList}> Add New List</div>
                    </article>
                </div>
            </div>
           
        );
    }
}