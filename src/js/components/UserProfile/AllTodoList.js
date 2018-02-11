import React from 'react';
import TodoList from './TodoList';
import AddNewTodolist from './AddNewTodolist';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';


export default class AllTodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists : [],
            createdDate: '',
            title :'new list',
            items : [],
            userid : this.props.username,
           
        }

        this.deleteListAction = this.deleteListAction.bind(this);
        this.updateListAction = this.updateListAction.bind(this);
        this.updateNewListAction = this.updateNewListAction.bind(this);
    }

    deleteListAction (id){
        
        this.state.lists.splice(id,1);
        this.setState({lists:this.state.lists});
    }

    updateListAction(id,list){
        this.state.lists.splice(id,1);
        this.state.lists.splice(id,0,list);
        this.setState({lists:this.state.lists});
    }

    addListAction(event) {
        console.log("res.data",event);
        this.state.lists.unshift(event);
    }

    updateNewListAction(value,key){
        let currentThis  = this;
        if(key =='title') {
            currentThis.setState({title : value})
        } else if(key =='items') {
             currentThis.state.items.push(value);
        }
        
    }

    componentDidMount(){
        let currentThis  = this;
        axios.get('api/list/getAllListForOneUser/'+this.props.username)
        .then(function (res) {
            currentThis.setState({lists : res.data});
        })
    }

    render() {
            var currentThis = this;
        return (
            <div>
                <header>
                    <h1>My ToDo Lists</h1>
                </header>
                <div class="band">
                <AddNewTodolist addListAction = {this.addListAction} list={{title:this.state.title , items :this.state.items,userid:this.state.userid}}  updateNewListAction={this.updateNewListAction}/>
                    {
                        this.state.lists.map(function(list,i){
                        return <TodoList list={list} id={i} updateListAction={currentThis.updateListAction} deleteListAction = {currentThis.deleteListAction}/>
                    })}
                </div>
            </div>
        );
    }
}