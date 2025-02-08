import React, { useState } from 'react';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Input from '../components/Input';
import Button from '../components/Button';
import BottomWarning from '../components/BottomWarning';

const SignUp = () => {

    
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="felx felx-col justify-center">
                <div className="rounded-lg bg-white w-90 text-center p-2 h-max mt-30 px-4">
                    <Heading props={{Heading: "Sign Up"}}/>
                    <SubHeading props={{SubHeading: "Enter your information to create an account"}}/>
                    <Input placeholder = {"Teerth"} label={"Firstname"} />
                    <Input placeholder = {"Patel"} label={"Lastname"} />
                    <Input placeholder = {"example@gmail.com"} label={"Email"} />
                    <Input placeholder = {"********"} label={"Password"} />
                    <Button label={"Sign Up"} />
                    <BottomWarning label={"Already have an account?"} buttontext={"Sign In"} to={"/signin"} />
                </div>

            </div>
        </div>
    )
};

export default SignUp;