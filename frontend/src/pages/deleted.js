import React from 'react';
import SideBar from '../components/sidebar';
import ListContainer from '../components/listcontainer';
import DeletedCard from '../components/deletedcard';

import '../assets/css/base.css';

class Deleted extends React.Component{
    render(){
        return(
            <div class="body">
                <SideBar tab='5'/>
                <ListContainer>
                    <DeletedCard type={0} heading="asuhs sih sia sjs sia jsi "/>
                    <DeletedCard type={0} heading="asuhs sih sia sjs sia jsi "/>
                    <DeletedCard type={0} heading="asuhs sih sia sjs sia jsi "/>
                    <DeletedCard type={0} heading="asuhs sih sia sjs sia jsi "/>
                    <DeletedCard type={0} heading="asuhs sih sia sjs sia jsi "/>
                    <DeletedCard type={0} heading="asuhs sih sia sjs sia jsi "/>
                    <DeletedCard type={0} heading="asuhs sih sia sjs sia jsi "/>
                    <DeletedCard type={0} heading="asuhs sih sia sjs sia jsi "/>
                </ListContainer>
            </div>
        );
    }
}
export default Deleted;