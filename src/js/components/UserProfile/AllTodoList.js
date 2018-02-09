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
    }

    componentDidMount(){
        let currentThis  = this;
        axios.get('api/list/getAllListForOneUser/'+this.props.username)
        .then(function (res) {
            console.log(res);
            currentThis.setState({lists : res.data});
        })
    }

    render() {
        console.log(this.state.lists);
        return (
            <div>
                <header>
                    <h1>My ToDo Lists</h1>
                </header>
                <div class="band">
                    {this.state.lists.map(function(list,i){
                         return <TodoList list={list} />
                    })}
                </div>
            </div>
        );
    }
}