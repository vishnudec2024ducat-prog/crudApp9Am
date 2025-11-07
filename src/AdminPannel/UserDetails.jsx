import React, { useContext } from 'react'

import { useSelector } from 'react-redux';

const UserDetails = () => {
    const {user:{name,age,email,address,image}} = useSelector(state=>state.userSlice)
  return (
    <div className="container">
      <div className="row">
        <div className="card text-center  " style={{ height: "60vh" }}>
          <img
            src={image}
            className="card-img-top  mx-auto rounded rounded-circle "
            alt="..."
            style={{ width: "150px", height: "150px" }}
          />
          <div className="card-body d-flex flex-column justify-content-evenly">
            <p className="card-title f" style={{ fontWeight: "600" }}>
              {name}
            </p>
            <h5 className="">Age {age}</h5>
            <h4
              className="card-text "
             
            >
              {email}
            </h4>
            <h5 className="">{address}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails