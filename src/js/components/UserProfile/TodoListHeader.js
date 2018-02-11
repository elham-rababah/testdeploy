import React from 'react';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        
    }
    
   

    render() {
        //console.log(this.props.list)
        var currentThis = this;
        return (
                
            <input 
                class="thumb card-header"  
                value={this.props.list.title} 
                style={{background: "green"}}
                onChange ={this.props.updateHeaderAction}
                />
        );
    }
}