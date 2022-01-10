import React from "react";

import '../assets/css/logo.css';
import logo from '../assets/images/1.jpg';


class Logo extends React.Component{
    render(){
        return(
            <div className="logo-row">
                <div className="logo-container">
                    <img src={logo}/>
                </div>
            </div>
        );
    }
}
export default Logo;