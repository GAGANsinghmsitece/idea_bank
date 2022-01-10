import React from 'react';
import { Add,HomeOption,List,Checkmark,Trash} from 'grommet-icons';
import { Link } from 'react-router-dom';

import Logo from './logo';
import IconRow from './icon-row';

import '../assets/css/sidebar.css';

class SideBar extends React.Component{
    
    render(){
        var address=this.props.tab;

        if(address=='1'){
            return(
                <div className='sidebar'>
                    <Logo/>
                    <Link to="/create">
                        <IconRow data="Create" bold={true}>
                            <Add color='#1e2022'/>
                        </IconRow>
                    </Link>
                    <Link to="/">
                        <IconRow data="Home">
                            <HomeOption color="#52516b"/>
                        </IconRow>
                    </Link>
                    <Link to="/all">
                        <IconRow data="All">
                            <List color="#52616b"/>
                        </IconRow>
                    </Link>
                    <Link to="/completed">
                        <IconRow data="Completed">
                            <Checkmark color="#52616b"/>
                        </IconRow>
                    </Link>
                    <Link to="/deleted">
                        <IconRow data="Deleted">
                            <Trash color="#52616b"/>
                        </IconRow>
                    </Link>
                </div>
            );
        }else if(address=='2'){
            return(
                <div className='sidebar'>
                    <Logo/>
                    <Link to="/create">
                        <IconRow data="Create">
                            <Add color='#52516b'/>
                        </IconRow>
                    </Link>
                    <Link to="/">
                        <IconRow data="Home" bold={true}>
                            <HomeOption color="#1e2022"/>
                        </IconRow>
                    </Link>
                    <Link to="/all">
                        <IconRow data="All">
                            <List color="#52616b"/>
                        </IconRow>
                    </Link>
                    <Link to="/completed">
                        <IconRow data="Completed">
                            <Checkmark color="#52616b"/>
                        </IconRow>
                    </Link>
                    <Link to="/deleted">
                        <IconRow data="Deleted">
                            <Trash color="#52616b"/>
                        </IconRow>
                    </Link>
                </div>
            );
        }else if(address=='3'){
            return(
                <div className='sidebar'>
                    <Logo/>
                    <Link to="/create">
                        <IconRow data="Create">
                            <Add color='#52516b'/>
                        </IconRow>
                    </Link>
                    <Link to="/">
                        <IconRow data="Home">
                            <HomeOption color="#52516b"/>
                        </IconRow>
                    </Link>
                    <Link to="/all">
                        <IconRow data="All" bold={true}>
                            <List color="#1e2022"/>
                        </IconRow>
                    </Link>
                    <Link to="/completed">
                        <IconRow data="Completed">
                            <Checkmark color="#52616b"/>
                        </IconRow>
                    </Link>
                    <Link to="/deleted">
                        <IconRow data="Deleted">
                            <Trash color="#52616b"/>
                        </IconRow>
                    </Link>
                </div>
            );
        }else if(address=='4'){
            return(
                <div className='sidebar'>
                    <Logo/>
                    <Link to="/create">
                        <IconRow data="Create">
                            <Add color='#52516b'/>
                        </IconRow>
                    </Link>
                    <Link to="/">
                        <IconRow data="Home">
                            <HomeOption color="#52616b"/>
                        </IconRow>
                    </Link>
                    <Link to="/all">
                        <IconRow data="All">
                            <List color="#52616b"/>
                        </IconRow>
                    </Link>
                    <Link to="/completed">
                        <IconRow data="Completed" bold={true}>
                            <Checkmark color="#1e2022"/>
                        </IconRow>
                    </Link>
                    <Link to="/deleted">
                        <IconRow data="Deleted">
                            <Trash color="#52616b"/>
                        </IconRow>
                    </Link>
                </div>
            );
        }else{
            return(
                <div className='sidebar'>
                    <Logo/>
                    <Link to="/create">
                        <IconRow data="Create">
                            <Add color='#52516b'/>
                        </IconRow>
                    </Link>
                    <Link to="/">
                        <IconRow data="Home">
                            <HomeOption color="#52616b"/>
                        </IconRow>
                    </Link>
                    <Link to="/all">
                        <IconRow data="All">
                            <List color="#52616b"/>
                        </IconRow>
                    </Link>
                    <Link to="/completed">
                        <IconRow data="Completed">
                            <Checkmark color="#52616b"/>
                        </IconRow>
                    </Link>
                    <Link to="/deleted">
                        <IconRow data="Deleted" bold={true}>
                            <Trash color="#1e2022"/>
                        </IconRow>
                    </Link>
                </div>
            );
        }
    }
}
export default SideBar;