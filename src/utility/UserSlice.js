import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllUser = createAsyncThunk("getAllUser",async ()=>{
     try {
         const res = await axios.get(
           "https://68ef190cb06cc802829c1bdb.mockapi.io/flipkart/users"
         );
         return res.data
     } catch (error) {
        
     }
})

// Add user in Api
export const addUser = createAsyncThunk("addUser", async (user) => {
  try {
    const res = await axios.post(
      "https://68ef190cb06cc802829c1bdb.mockapi.io/flipkart/users",user
    );
    return res.data;
  } catch (error) {}
});

// delete user from api

export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  try {
    const res = await axios.delete(
      `https://68ef190cb06cc802829c1bdb.mockapi.io/flipkart/users/${id}`,
    );
        return id
  } catch (error) {}
});

// get Single User from Api
export const getSingleUser = createAsyncThunk("getSingleUser", async (id) => {
  try {
    const res = await axios.get(
      `https://68ef190cb06cc802829c1bdb.mockapi.io/flipkart/users/${id}`
    );
    return res.data;
  } catch (error) {}
});

// update user in Api
export const editUser = createAsyncThunk("editUser", async (user) => {
  try {
    const res = await axios.put(
      `https://68ef190cb06cc802829c1bdb.mockapi.io/flipkart/users/${user.id}`,user
    );
    return user;
  } catch (error) {}
});
const UserSlice  = createSlice({
    name:"userSlice",
    initialState:{
        userList:[],
        user:{
            name:"",
            age:"",
            email:"",
            address:"",
            image:""
        },
        show:false,
        isloading:false,
        checkForm:"Add"

    },
    reducers:{
        handleShow:(state,action)=>{
            state.show = true
        },
        handleClose:(state,action)=>{
            state.show = false
        },
        handleCheckForm:(state,action)=>{
                state.checkForm = action.payload
        },
        handleUser:(state,action)=>{
            state.user = {...state.user,...action.payload}
            // {name:"",age:"",email:"",address:"",image:"",name:"rahul"}
        },
        handleemptyUser:(state,action)=>{
          state.user = {
            name: "",
            age: "",
            email: "",
            address: "",
            image: "",
          };
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllUser.pending,(state,action)=>{
                state.isloading=true
        }).addCase(getAllUser.fulfilled,(state,action)=>{
            state.isloading = false
            state.userList = action.payload
        }).addCase(addUser.fulfilled,(state,action)=>{
            state.userList = [...state.userList,action.payload]
        }).addCase(deleteUser.fulfilled,(state,action)=>{
           state.userList =  state.userList.filter((elm)=>elm.id!=action.payload)
        }).addCase(getSingleUser.fulfilled,(state,action)=>{
                state.user = action.payload
                // console.log(action.payload)
        }).addCase(editUser.fulfilled,(state,action)=>{
            let index1 = state.userList.findIndex((elm)=>elm.id==action.payload.id)
            state.userList[index1] = action.payload
        })
    }
})
export const {
  handleClose,
  handleShow,
  handleCheckForm,
  handleUser,
  handleemptyUser,
} = UserSlice.actions;
export default UserSlice.reducer