import React from 'react';

import SideBar from '../components/sidebar';
import ListContainer from '../components/listcontainer';
import ListCard from '../components/listcard';

import '../assets/css/base.css';

class All extends React.Component{
    render(){
        return(
            <div class="body">
                <SideBar tab='3'/>
                <ListContainer>
                    <ListCard heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard heading="asuhs sih sia sjs sia jsi "/>
                    <ListCard heading="asuhs sih sia sjs sia jsi "/>
                </ListContainer>
            </div>
        );
    }
}
export default All;