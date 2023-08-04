import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./redux/userSlice";
import axios from "axios";

function Users() {
    
    const users  = useSelector(state => state.users.users)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
      axios.delete(`https://odd-plum-parrot-sock.cyclic.app/deleteuser/${id}`)
      .then(
          res=>{
            dispatch(deleteUser({id}))
          }
        )
        .catch(err => console.log(err))
    }
    
    return (
      <div className='flex h-screen bg-green-200 justify-center items-center'>
          <div className="w-1/2 bg-white rounded p-3 ">
            <Link to="/create" className="bg-green-500 hover:bg-green-600 text-white text-sm py-1 px-2 rounded">
              Add+
            </Link>
            <table className=" w-full" >
              <thead>
                <tr className="border-b">
                <th className=" py-2 px-4 text-left">Name</th>
                <th className=" py-2 px-4 text-left">Age</th>
                <th className=" py-2 px-4 text-left">Email</th>
                <th className=" py-2 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                  {
                    users.map(user=>{
                      return <tr key={user.id} className="border-b">
                      <td className=" py-2 px-4 text-left">{user.name}</td>
                      <td className=" py-2 px-4 text-left">{user.age}</td>
                      <td className=" py-2 px-4 text-left">{user.email}</td>
                      <td className=" py-2 px-4 text-left">
                        <Link to={`/edit/${user.id}`} className="bg-blue-500 hover:bg-blue-500 text-white text-sm py-1 px-2 rounded">
                          Update
                        </Link>       
                        <button 
                          onClick={() => handleDelete(user.id)}
                          className="bg-red-500 hover:bg-red-500 text-white text-sm py-1 px-2 rounded ml-2 md:ml-2">
                          Delete
                        </button>
                      </td>
                    </tr>
                    })
                  }
              </tbody>
            </table>
          </div>
      </div>
    )
  }
  
  export default Users;
  