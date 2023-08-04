import {useState} from "react"
import axios from "axios"
import { useEffect } from "react";
import { addUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

 function CreateUser()
{
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [age,setAge] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://odd-plum-parrot-sock.cyclic.app/create',{name,email,age})
        .then(res => {
            dispatch(addUser(res.data))
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="flex h-screen bg-blue-500 justify-center items-center">
            <div className="w-1/2 bg-white rounded p-3">
                <form  onSubmit={handleSubmit}>
                    <h2 className="font-semibold text-xl">Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="">
                            Name
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter name" 
                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            onChange = {(e)=>setName(e.target.value)}
                        />                      
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">
                            Email
                        </label>
                        <input 
                            type="email" 
                            placeholder="Enter email" 
                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">
                            Age
                        </label>
                        <input 
                            type="number"
                            placeholder="Enter age" 
                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            onChange={(e)=>setAge(e.target.value)}
                        />
                    </div>
                    <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Submit</button>
                </form>
            </div>
        </div>
    )

}

export default CreateUser;

