import axios from "axios";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addUser, updateUser } from "./redux/userSlice";

function UpdateUser()
{
    const {id} = useParams();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [age,setAge] = useState();
    const users = useSelector(state => state.users.users);
    useEffect(()=> {
        const user = users.find(u => u.id === id)
        setName(user.name)
        setEmail(user.email)
        setAge(user.age)
    }, [])

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('https://odd-plum-parrot-sock.cyclic.app/update/'+id,{name,email,age})
        .then(res => {
            dispatch(updateUser({id,name,email,age}))
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="flex h-screen bg-blue-500 justify-center items-center">
            <div className="w-1/2 bg-white rounded p-3">
                <form  onSubmit={handleUpdate}>
                    <h2 className="font-semibold text-xl">Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="">
                            Name
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter name" 
                            value={name}
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
                            value={email}
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
                            value={age}
                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            onChange={(e)=>setAge(e.target.value)}
                        />
                    </div>
                    <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Update</button>
                </form>
            </div>
        </div>
    )
}
export default UpdateUser;










