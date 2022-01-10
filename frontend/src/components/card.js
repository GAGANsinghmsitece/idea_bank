import React from 'react';
import { Menu,Grommet } from 'grommet';
import { More } from 'grommet-icons';

import customTheme from '../config/customtheme';

import '../assets/css/card.css';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={
            modalState:false,
        };
        this.openModal=this.openModal.bind(this);
    }

    openModal(){
        this.setState((prevState)=>({
            modalState:!prevState.modalState,
        }));
    }

    render(){
        var color_choice=this.props.type;
        var result="card card-yellow";
        var modal_state=this.state.modalState;

        if(color_choice==1){
            result="card card-orange";
        }else if(color_choice==2){
            result="card card-green";
        }else if(color_choice==3){
            result="card card-green2";
        }

        
        return(
            <div class={result}>
                <div className="card-header">
                    <Grommet theme={customTheme}>
                        <Menu
                            margin="none"
                            items={[
                                {label:'Move to Next Stage'},
                                {label:'Move to Previous Stage'}
                            ]}
                        />
                    </Grommet>
                </div>
                <div className="card-content">
                    {this.props.heading}
                </div>
            </div>   
        );
    }

}
export default Card;