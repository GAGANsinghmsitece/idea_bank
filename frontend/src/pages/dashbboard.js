import React from 'react';

import SideBar from '../components/sidebar';
import StateContainer from '../components/state_container';

import '../assets/css/base.css';

class Dashboard extends React.Component{
    render(){
        return(
          <div className="body">
            <SideBar tab='2'/>
            <StateContainer/>
          </div>
        );
    }
}
export default Dashboard;