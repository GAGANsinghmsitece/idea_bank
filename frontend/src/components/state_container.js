import React from 'react';

import Column from './column';
import Card from './card';

import '../assets/css/statecontainer.css';

class StateContainer extends React.Component{
    render(){
        return(
            <div class="state-container">
                <Column title="Step 1">
                    <Card heading="This is a test-heading shd jshj fb sfd fsj hfss fv bfssf  fhs  ss "/>
                </Column>
                <Column title="Step 2" >
                    <Card type="1"/>
                </Column>
                <Column title="Step 3">
                    <Card type="2"/>
                </Column>
                <Column title="Step 4">
                    <Card type="3"/>
                </Column>
                <Column title="Step 5">
                    <Card/>
                </Column>
            </div>
        );
    }
}
export default StateContainer;