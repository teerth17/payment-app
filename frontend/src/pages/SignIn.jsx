import React, { useState } from 'react';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Input from '../components/Input';
import Button from '../components/Button';
import BottomWarning from '../components/BottomWarning';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

     return (
            <div className="bg-slate-300 h-screen flex justify-center">
                <div className="felx felx-col justify-center">
                    <div className="rounded-lg bg-white w-90 text-center p-2 h-max mt-30 px-4">
                        <Heading props={{Heading: "Sign In"}}/>
                        <SubHeading props={{SubHeading: "Enter your information to create an account"}}/>
                        <Input onChange={(e) => setUsername(e.target.value)} placeholder = {"example@gmail.com"} label={"Email"} />
                        <Input onChange={(e) => setPassword(e.target.value)} placeholder = {"********"} label={"Password"} />
                        <Button onCLick={async (e) => {
                        console.log("Clicked");
                       const response =  await axios.post('http://localhost:3000/api/v1/user/signin',{
                            username,
                            password
                        })
                        localStorage.setItem('token',response.data.token)
                        localStorage.setItem('userId',response.data.userId)
                        console.log(response.data.token);
                        console.log(response.data.userId);
                        console.log(response.data.message);
                        navigate('/dashboard')
                    }}
                    label={"Sign In"} />
                        <BottomWarning label={"Don't have account?"} buttontext={"Sign Up"} to={"/signup"} />
                    </div>
    
                </div>
            </div>
        )
}

export default SignIn;
