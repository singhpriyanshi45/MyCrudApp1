 /*
 import React, { Component } from "react";
 import axios from "axios";
 import GoogleLogin from "react-google-login";
 import FacebookLogin from 'react-facebook-login';
 import TextField from 'material-ui/TextField';

 class Login extends React.Component{
     constructor(){
         super();
         this.state={
             uname:"",
             upwd:""
         }
     }
     login = ()=>{
         axios.post("http://localhost:8080/login",{
             "uname":this.refs.uname.value,
             "upwd":this.refs.upwd.value
         }).then((posRes)=>{
             if(posRes.data.login === "success"){
                 this.props.history.push("/app");
             };
         },(errRes)=>{
             console.log(errRes);
         })
     };

     googleResponse = (response)=>{
         if(response.profileObj.email === "samba.pendela@gmail.com"){
             this.props.history.push("/app");
         }
     }

     responseFacebook = (response)=>{
         console.log(response);
     };

     render(){
         return(
             <div>
                 <fieldset>
                     <legend>Signin</legend>
                     <input type="text"
                            ref="uname"
                            placeholder="User Name"></input>
                     <br></br><br></br>
                     <input type="password"
                            ref="upwd"
                            placeholder="Password" ></input>

                     <br></br><br></br>
                     <button onClick={this.login}>Login</button>
                     <br></br>
                     <GoogleLogin 
                         clientId="502629573543-i12m42fb9jc0rvfscjq7rp3rd22u11h3.apps.googleusercontent.com"
                         buttonText="Google Auth"
                         onSuccess={this.googleResponse}
                         onFailure={this.googleResponse}
                         cookiePolicy={'single_host_origin'}></GoogleLogin>
                     <br></br>
                     <FacebookLogin
                             appId="2621762298141111"
                             autoLoad={false}
                             fields="name,email,picture"
                             scope="public_profile,user_friends"
                             callback={this.responseFacebook}
                             icon="fa-facebook" />

                 </fieldset>
               
             </div>
         )
     };
 };

 export default Login;
*/





import React,{ Component } from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import axios from "axios";
import GoogleLogin from "react-google-login";

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            uname : "",
            upwd : ""
        };
    };
    signin = (event)=>{
        event.preventDefault();
        axios.post("http://localhost:8080/login",this.state)
             .then((posRes)=>{
                if(posRes.data.login){
                    this.props.history.push("/app");
                }
             },(errRes)=>{
                console.log(errRes);
        });
    };
    getData = (event)=>{
        event.preventDefault();
        
        this.setState({
            
            [event.target.name]:event.target.value
        })
    };
    googleResponse = (response)=>{
        this.props.history.push("/app");
    };
    render(){
        return(
                <Container maxWidth="xs">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding:8}}>
                        
                        <Typography variant="h5">
                            Sign In
                        </Typography>

                        <form style={{
                            width:"100%",
                            marginTop:1
                        }} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="User Name"
                                autoFocus
                                name="uname"
                                onChange={this.getData} />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="upwd"
                                type="password"
                                autoComplete="current-password"
                                name="upwd"
                                onChange={this.getData} />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.signin}>
                                Sign In
                            </Button>
                            
                                
                                <GoogleLogin 
                                    clientId="502629573543-i12m42fb9jc0rvfscjq7rp3rd22u11h3.apps.googleusercontent.com"
                                    buttonText="Google Auth"
                                    onSuccess={this.googleResponse}
                                    onFailure={this.googleResponse}
                                    cookiePolicy={'single_host_origin'}
                                    render= { renderProps => (
                                        <button onClick={renderProps.onClick} 
                                                disabled={renderProps.disabled}
                                                style={{width:380,
                                                        marginTop:20,
                                                        backgroundColor:"blue",
                                                        color:"white",
                                                        outline:"none",
                                                        border:1,
                                                        padding:10,
                                                        borderRadius:10}}>
                                                Google Auth
                                        </button>
                                      )}
                                    ></GoogleLogin>
                                
                            
                        </form>
                    </div>
                </Container>
        )
    }
};
export default Login;

















  











