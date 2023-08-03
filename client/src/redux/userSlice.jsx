import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice(
    {
        name:"users",
        initialState:{
            users:[]
        },
        reducers:{
            getUser : (state,action) => {
                state.users = action.payload.map(user => {
                    return {
                        id:user._id,
                        name:user.name,
                        email:user.email,
                        age:user.age
                    }                  
                })
            },
            addUser: (state,action) => {
                state.users.push(action.payload)
            }
        }
    }
)

export const {getUser,addUser} = userSlice.actions;
export default userSlice.reducer;