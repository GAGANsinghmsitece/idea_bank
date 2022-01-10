import React from 'react';
import {Grommet,Menu} from 'grommet';
import { Revert} from 'grommet-icons';

import customTheme from '../config/customtheme';

import '../assets/css/deletedcard.css';

class DeletedCard extends React.Component{

    render(){

        return(
            <div className="deleted-card">
                <div className="deleted-card-header">
                    <Grommet theme={customTheme}>
                        <Menu margin="none"
                            items={[
                                {icon:<Revert/>,label:'Restore idea ',size:'large'}
                            ]}
                        ></Menu>
                    </Grommet>
                </div>
                <div className="deleted-card-content">
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
export default DeletedCard;