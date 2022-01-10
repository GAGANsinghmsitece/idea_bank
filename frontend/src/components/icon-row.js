import React from "react";

import '../assets/css/iconrow.css';

class IconRow extends React.Component{
    render(){
        return(
            <div className={this.props.bold===true?"icon-row bold":"icon-row"}>
                <div className="icon-container">
                    {this.props.children}
                </div>
                <p>{this.props.data}</p>
            </div>
        );
    }
}
export default IconRow;