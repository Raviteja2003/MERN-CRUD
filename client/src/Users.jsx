import { useEffect } from "react";
import axios from 'axios';
import {useDispatch,useSelector} from "react-redux";
import {getUser} from "./redux/userSlice";
function Users() {
    const dispatch = useDispatch();
    const users  = useSelector(state=>state.users.users)
    console.log(useSelector(state=>state.users.users))
    useEffect(()=>{
      const fetchData = async() => {
        try{
          const response = await axios.get('http://localhost:3001');
          dispatch(getUser(response.data));
        }
        catch(err)
        {
            console.log(err);
        }
      }
      fetchData();
    },[]);

    return (
      <div className='flex h-screen bg-green-200 justify-center items-center'>
          <div className="w-1/2 bg-white rounded p-3 ">
            <button className="bg-green-500 hover:bg-green-600 text-white text-sm py-1 px-2 rounded">
              Add+
            </button>
            <table className="mt-4 border-collapse w-full col-span-1" >
              <thead>
                <tr>
                <th className=" py-2">Name</th>
                <th className=" py-2">Age</th>
                <th className=" py-2">Email</th>
                <th className=" py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                  {
                    users.map(user=>{
                      return <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.age}</td>
                      <td>{user.email}</td>
                      <td>
                        <button>update</button>
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
  