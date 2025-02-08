import React, { useState } from 'react';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Input from '../components/Input';
import Button from '../components/Button';
import BottomWarning from '../components/BottomWarning';


function SignIn(){
     return (
            <div className="bg-slate-300 h-screen flex justify-center">
                <div className="felx felx-col justify-center">
                    <div className="rounded-lg bg-white w-90 text-center p-2 h-max mt-30 px-4">
                        <Heading props={{Heading: "Sign In"}}/>
                        <SubHeading props={{SubHeading: "Enter your information to create an account"}}/>
                        <Input placeholder = {"example@gmail.com"} label={"Email"} />
                        <Input placeholder = {"********"} label={"Password"} />
                        <Button label={"Sign In"} />
                        <BottomWarning label={"Don't have account?"} buttontext={"Sign Up"} to={"/signup"} />
                    </div>
    
                </div>
            </div>
        )
}

export default SignIn;
