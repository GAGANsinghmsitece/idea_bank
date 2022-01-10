import React from 'react';


import '../assets/css/listcard.css';

class ListCard extends React.Component{

    render(){

        return(
            <div className={this.props.type==0?"list-card list-card-green":"list-card"}>
                
                <div className="card-content">
                    {this.props.heading}
                </div>
            </div>   
        );
    }

}
// os and programming
//  basics of os boot procees linux and windows memory masnagement file management resource allocation  trace routing
//  coding is good to have.
// networking
//  osi model, tcp ip ucp ping command basics of network hardware network topology network DORA Process dns/tsap netstat
// manager
//  
export default ListCard;