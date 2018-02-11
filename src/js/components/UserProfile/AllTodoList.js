import React from 'react';
import TodoList from './TodoList';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';


export default class AllTodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists : []
        }

        this.deleteListAction = this.deleteListAction.bind(this);
        this.updateHeaderAction = this.updateHeaderAction.bind(this);

    }

    deleteListAction (id){
        
        this.state.lists.splice(id,1);
        this.setState({lists:this.state.lists});
    }

    updateHeaderAction(id,list){
        this.state.lists.splice(id,1);
        this.state.lists.splice(id,0,list);
        this.setState({lists:this.state.lists});
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
                    {
                        this.state.lists.map(function(list,i){
                        return <TodoList list={list} id={i} updateHeaderAction={currentThis.updateHeaderAction} deleteListAction = {currentThis.deleteListAction}/>
                    })}
                </div>
            </div>
        );
    }
}