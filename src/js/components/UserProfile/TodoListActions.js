import React from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';

export default class TodoListActions extends React.Component {
    constructor(probs) {
        super(probs);
        this.state = {

        };

        this.deleteList = this.deleteList.bind(this);
        
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


    render() {
        return (
            <div class="card-footer">
                <a class="glyphicon glyphicon-edit"></a>
                <a class="glyphicon glyphicon-floppy-disk"></a>
                <a onClick={this.deleteList} class="glyphicon glyphicon-trash"></a>
            </div>
        );
    }
}