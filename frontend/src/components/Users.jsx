import React, {useState} from 'react'
import Button from './Button'
import SendMoney from '../pages/SendMoney'
import { Navigate, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Users(){
    const navigate = new useNavigate();

    const[users,setUsers] = useState([{
        firstName: "John",
        lastName: "Doe",
        _id: 1
    }])

    return(

        <>
        <div className="font-bold mt-6 text-lg px-4">
            Users
        </div>
        <div className="my-2 px-4">
            <input type="text" placeholder="Search users" className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User navigate= {navigate} user={user} />)}
        </div>
        </>
    )
}

function User({user,navigate}){
    return(
        <div className="flex justify-between ml-4 mt-4 ">
            <div className="flex ">
                <div className="rounded-full h-11 w-11 bg-slate-200 flex justify-center items-center mr-2 text-xl font-bold">
                {user.firstName[0]}
                </div>
            </div>

            <div className='flex justify-between w-full items-center'>
                <div className='text-xl font-bold mx-1'>
                {user.firstName} {user.lastName}
                </div>
            </div>

            <div className='flex justify-end w-full mr-4'>
                <Button label={"Send Money"} onCLick={(e) => {
                    navigate('/send')
                }} />
            </div>
        </div>
    )
}