import React, { useState } from 'react';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Input from '../components/Input';
import Button from '../components/Button';
import BottomWarning from '../components/BottomWarning';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState('');    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="felx felx-col justify-center">
                <div className="rounded-lg bg-white w-90 text-center p-2 h-max mt-30 px-4">
                    <Heading props={{Heading: "Sign Up"}}/>
                    <SubHeading props={{SubHeading: "Enter your information to create an account"}}/>
                    <Input onChange={e => {
                        console.log(e.target.value);
                        setFirstname(e.target.value)}}
                         placeholder = {"Teerth"} label={"Firstname"} />
                    <Input onChange={e => {
                        console.log(e.target.value);
                        setLastname(e.target.value)}}
                         placeholder = {"Patel"} label={"Lastname"} />
                    <Input 
                     onChange={e => {
                        console.log(e.target.value);
                        setUsername(e.target.value)}}
                        placeholder = {"example@gmail.com"} label={"Email"} />
                    <Input  onChange={e => {
                        console.log(e.target.value);
                        setPassword(e.target.value)}}
                        placeholder = {"********"} label={"Password"} />
                    <Button onCLick={async () => {
                        console.log("Clicked");
                       const response =  await axios.post('http://localhost:3000/api/v1/user/signup',{
                            username,
                            firstname,
                            lastname,
                            password
                        })
                        localStorage.setItem('token',response.data.token)
                        navigate('/dashboard')
                    }}
                    label={"Sign Up"} />
                    <BottomWarning label={"Already have an account?"} buttontext={"Sign In"} to={"/signin"} />
                </div>

            </div>
        </div>
    )
};

export default SignUp;