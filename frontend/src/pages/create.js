import React from 'react';

import CreateIdea from '../components/createidea';

import SideBar from '../components/sidebar';

class Create extends React.Component{
    render(){
        return(
            <div>
                <SideBar tab='1'/>
                <CreateIdea/>
            </div>
        );
    }
}
export default Create;