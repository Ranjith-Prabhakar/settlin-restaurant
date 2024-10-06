
import React, { useState } from "react";
import { Meteor } from 'meteor/meteor';
import './login.css';
import { Button, Stack, TextField } from "@mui/material";

export function Login() {
    const [mobile, setMobile] = useState('');

    const handleRegister = () => {
                Meteor.call('createNewUser', { userName: mobile }, (error, result) => {
                    if (error) {
                        alert(error.reason); // Show an error message if user already exists
                    } else {
                        // alert('User registered successfully! User ID: ' + result);
                       Meteor.loginWithPassword(mobile,mobile)
                    }
                });
            };

    return (
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
            value={mobile}
            onChange={(e) => setMobile(e.target.value)} />
            <Button sx={{width:'25%'}} variant="contained" onClick={handleRegister}>Login</Button>
        </Stack>


    );
}
