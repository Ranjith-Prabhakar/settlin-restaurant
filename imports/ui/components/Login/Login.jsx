import React, { useState } from "react";
import { Meteor } from 'meteor/meteor';
import { Button, Stack, TextField, Typography } from "@mui/material";

export function Login() {
    const [loginOrSignUp, setLoginOrSignUp] = useState("login")
    const [loginMobile, setLoginMobile] = useState('')
    const [signUpMobile, setSignUpMobile] = useState('');

    const handleLogin = () => {
        Meteor.loginWithPassword(loginMobile, loginMobile)
    }

    const handleRegister = () => {
        Meteor.call('createNewUser', { userName: signUpMobile }, (error) => {
            if (error) {
                alert(error.reason);
            } else {
                Meteor.loginWithPassword(signUpMobile, signUpMobile)
            }
        });
    };

    const switchComponent = (status) => {
        if (status === "login") {
            setLoginOrSignUp('login')
        } else {
            setLoginOrSignUp('singUp')
        }
    }

    return (
        <Stack>
            {loginOrSignUp === "login" ? 
            // login
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
                    value={loginMobile}
                    onChange={(e) => setLoginMobile(e.target.value)} />
                <Button sx={{ width: '25%' }} variant="contained" onClick={handleLogin}>Login</Button>
                <Button onClick={() => switchComponent("signUp")}>
                    <Typography sx={{ textTransform: 'capitalize' }}>don't have an account?</Typography>
                </Button>
            </Stack> :
            // sign up
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

                    <Button onClick={() => switchComponent('login')} >
                        <Typography sx={{ textTransform: 'capitalize' }}>already have an account?</Typography>
                    </Button>
                </Stack>
            }

        </Stack>
    );
}
