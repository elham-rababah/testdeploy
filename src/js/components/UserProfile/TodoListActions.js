import React from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';

export default class TodoListActions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        console.log(this.props)

        this.deleteList = this.deleteList.bind(this);
        this.updateList = this.updateList.bind(this);
        this.completeList = this.completeList.bind(this);
        
    }

    deleteList (event) {
        var currentThis = this;
        axios.delete('/api/list/deletelist/'+this.props.list._id)
        .then(function (res) {
            alert ('New List Deleted successfully')
            currentThis.props.deleteListAction(currentThis.props.id)
        })
        .catch(function (err) {
            //TODO better apperance for  Error 
            alert(err);
        });
    }

    updateList (event) {
        var currentThis = this;
        if (currentThis.props.newitem != ''){
            currentThis.props.updateItemsAction(currentThis.props.list.items.length,{target: {
                value:currentThis.props.newitem
            }})

           
        }

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

    completeList (event) {
        var currentThis = this;
        axios.put('/api/list/updatelist/'+this.props.list._id,{
            status:'completed',
        })
        .then(function (res) {
            alert("Your List is Completed ");
            currentThis.props.updateListAction(currentThis.props.id,res.data)

        })
        .catch(function (err) {
            //TODO better apperance for  Error 
            alert(err);
        });
    }

    render() {
        return (
            <div>
                <a title ="Update List" onClick={this.updateList} class="glyphicon glyphicon-floppy-disk actionbutton"></a>
                <a title ="Delete List" onClick={this.deleteList} class="glyphicon glyphicon-trash actionbutton"></a> 
                
                {this.props.list.status=='open' ? <a title ="Complete List" onClick={this.completeList} class="glyphicon glyphicon-ban-circle actionbutton"></a>:
                <a title ="Completed List" class="glyphicon glyphicon-ok actionbutton"></a>}
  
            </div>
        );
    }
}