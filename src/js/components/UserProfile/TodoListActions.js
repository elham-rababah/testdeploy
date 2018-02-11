import React from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';

export default class TodoListActions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.deleteList = this.deleteList.bind(this);
        this.updateList = this.updateList.bind(this);
        
    }

    deleteList (event) {
        var currentThis = this;
        axios.delete('/api/list/deletelist/'+this.props.list._id)
        .then(function (res) {
            currentThis.props.deleteListAction(currentThis.props.id)
        })
        .catch(function (err) {
            //TODO better apperance for  Error 
            alert(err);
        });
    }

    updateList (event) {
        var currentThis = this;
        axios.put('/api/list/updatelist/'+this.props.list._id,{
            title:this.props.list.title,
            items:this.props.list.items,
        })
        .then(function (res) {
             alert("Your List is updated ");
        })
        .catch(function (err) {
            //TODO better apperance for  Error 
            alert(err);
        });
    }

    render() {
        return (
            <div class="card-footer">
                <a onClick={this.updateList} class="glyphicon glyphicon-floppy-disk"></a>
                <a onClick={this.deleteList} class="glyphicon glyphicon-trash"></a>
            </div>
        );
    }
}