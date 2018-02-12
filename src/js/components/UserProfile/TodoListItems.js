import React from 'react';


export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newitem:''
        }
        
    }

    render() {
        var currentThis = this;
        return (
            <div>
                {this.props.list.items.map(function(item,i){
                return <textarea class="itemInput" value={item}  onChange ={(e) => currentThis.props.updateItemsAction(i, e)}/>})}
                <textarea value={this.props.newitem} placeholder="new item"  onKeyPress={this.props.handleKeyPress}/>
            </div>
        );
    }
}