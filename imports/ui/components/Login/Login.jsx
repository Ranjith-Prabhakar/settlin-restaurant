import React, { useState } from "react";
import { Meteor } from 'meteor/meteor';
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useSubscribe, useTracker } from 'meteor/react-meteor-data'
import { RestaurantCollection } from "../../../api/RestaurantCollection";

export function Login() {
    // const isLoading = !useSubscribe('restaurants');

    // let restaurants = useTracker(() => {
    //     return RestaurantCollection.find().fetch()
    // })

    const [loginOrSignUp, setLoginOrSignUp] = useState("login")
    const [loginMobile, setLoginMobile] = useState('')
    const [signUpMobile, setSignUpMobile] = useState('');

    const handleLogin = () => {
        Meteor.loginWithPassword(loginMobile, loginMobile)
    }

    const handleRegister = () => {
        Meteor.call('createNewUser', { userName: signUpMobile }, (error, result) => {
            if (error) {
                alert(error.reason); // Show an error message if user already exists
            } else {
                // alert('User registered successfully! User ID: ' + result);
                Meteor.loginWithPassword(signUpMobile, signUpMobile)
            }
        });
    };

    const switchComponent = (status)=>{
        if(status === "login"){
            console.log("Login")
            setLoginOrSignUp('login')
        }else{
            console.log("SignUp")
            setLoginOrSignUp('singUp')
        }
    }

    return (
        <Stack>
              {loginOrSignUp === "login" ? <Stack
                spacing={2}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: '100vh'
                }}
            >
                <TextField id="outlined-basic" label="Enter Your Mobile Nuber"
                    variant="outlined"
                    value={loginMobile}
                    onChange={(e) => setLoginMobile(e.target.value)} />
                <Button sx={{ width: '25%' }} variant="contained" onClick={handleLogin}>Login</Button>
                <Button onClick={()=>switchComponent("signUp")}>
                    <Typography  sx={{textTransform:'capitalize'}}>don't have an account?</Typography>
                </Button>
            </Stack> :
                <Stack
                    spacing={2}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: '100vh'
                    }}
                >
                    <TextField id="outlined-basic" label="Enter Your Mobile Nuber"
                        variant="outlined"
                        value={signUpMobile}
                        onChange={(e) => setSignUpMobile(e.target.value)} />
                    <Button sx={{ width: '25%' }} variant="contained" onClick={handleRegister}>Sign up</Button>

                    <Button  onClick={() => switchComponent('login')} >
                        <Typography sx={{textTransform:'capitalize'}}>already have an account?</Typography>
                    </Button>
                </Stack>
            }

        </Stack>
    );
}
