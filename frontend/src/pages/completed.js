import React from 'react';
import SideBar from '../components/sidebar';
import ListContainer from '../components/listcontainer';
import ListCard from '../components/listcard';

import '../assets/css/base.css';

class Completed extends React.Component{
    render(){
        return(
            <div class="body">
                <SideBar tab='4'/>
                <ListContainer>
                    <ListCard type={0} heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard type={0} heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard type={0} heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard type={0} heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard type={0} heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard type={0} heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard type={0} heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard type={0} heading="asuhs sih sia sjs sia jsi "/>
                </ListContainer>
            </div>
        );
    }
}
export default Completed;