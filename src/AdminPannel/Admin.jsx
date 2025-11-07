import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUser, getSingleUser, handleCheckForm, handleShow } from '../utility/UserSlice';


const Admin = () => {
  
  const dispatch = useDispatch()
    const {userList} = useSelector(state=>state.userSlice)
  useEffect(()=>{
        dispatch(getAllUser())
  },[])
const handleDelete = (id)=>{
  dispatch(deleteUser(id))
}

const handleEdit = (id)=>{
  dispatch(handleCheckForm("Edit"))
  dispatch(getSingleUser(id))
  dispatch(handleShow())
}
  return (
    <div>
   
      <table className="table align-middle text-center">
        <thead>
          <tr>
            <th scope="col">Sr No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">age</th>
            <th scope="col">Photo</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((elm, ind) => {
            const {name,age,address,image,email,id} = elm
            return (
              <tr key={elm.id}>
                <th scope="row">{ind + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{age}</td>
                <td>
                  <img
                    width={"100"}
                    height={"100"}
                    src={image}
                    alt=""
                  />
                </td>
                <td>{address}</td>
                <td>
                  <div className="btn-group">
                    <button className="btn btn-success"
                      onClick={()=>handleEdit(id)}
                    >Edit</button>
                    <button className="btn btn-danger" 
                      onClick={()=>handleDelete(id)}
                    >Delete</button>
                    <button className="btn btn-warning"
                      // onClick={()=>handleRead(id)}
                    >Read</button>
                  </div>
                </td>
              </tr>
            );
          }
           
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Admin