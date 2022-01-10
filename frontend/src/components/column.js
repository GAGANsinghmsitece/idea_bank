import React from 'react';

import '../assets/css/column.css';

class Column extends React.Component{
    render(){
        return(
            <div class="state-column">
                <div class="state-column-header">
                    {this.props.title}
                </div>
                <div class="state-column-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default Column;