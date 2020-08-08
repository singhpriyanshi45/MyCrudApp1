import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
//import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import EditButton from "@material-ui/icons/Edit";
import SaveButton from "@material-ui/icons/Save";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React,{ Component } from "react";
import Login from "./Login";
import App from "./App";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";


class Main extends React.Component{
    
    constructor(){
        super();
        this.state = {
            loginUser : "User"
        };
    };


    render(){
        return(
            <div>
                <Router>
                   
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton color="inherit"
                                        style={{marginLeft:-12,
                                                marginRight:16}}>
                                <MenuIcon />
                            </IconButton>
                            <Typography color="inherit" variant="h5" style={{marginRight:12}}>MERN STACK</Typography>
                            <Typography color="inherit">
                                <NavLink to="/signin" exact strict style={{color:"white"}}>SignIn</NavLink>
                            </Typography>
                            



                            <section style={{marginLeft:"auto",
                                             marginRight:-12}}>
                                
                                <IconButton color="inherit">
                                    <EditButton />
                                </IconButton>
                                <IconButton color="inherit">
                                    <SaveButton />
                                </IconButton>
                                {/* <IconButton color="inherit">
                                    <MoreVertIcon />
                                </IconButton> */}
                            </section>

                            <Typography color="inherit" style={{marginLeft:25}}>{this.state.loginUser}</Typography>


                        </Toolbar>
                    </AppBar>
                   
                   
                   {/* <NavLink to="/signin" exact strict activeStyle={{color:"green"}}>Signin</NavLink>  */}
                   <br></br><br></br>
                   <Route path="/signin" exact strict component={Login}></Route>
                   <Route path="/app" exact strict component={App}></Route>
                </Router>
            </div>
        )
    }
};
export default Main;