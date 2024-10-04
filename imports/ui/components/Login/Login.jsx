import React, { useState } from "react";
import { Meteor } from 'meteor/meteor';
import './login.css';

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
        <div className="flex h-[100vh] w-[100vw] justify-center items-center">
            <label htmlFor="mobile">
                <input
                    type="text"
                    id="mobile"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
            </label>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}
