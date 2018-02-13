import React from 'react';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        
    }
    
   

    render() {
        var currentThis = this;
        return (
                
            <textarea 
                class="thumb card-header"  
                value={this.props.list.title} 
                onChange ={this.props.updateHeaderAction}
                />
        );
    }
}