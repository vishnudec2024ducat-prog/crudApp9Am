import React, { useContext } from "react";

import { Button, Modal } from "react-bootstrap";
import UserDetails from "./UserDetails";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser, handleClose, handleUser } from "../utility/UserSlice";

const ModalForm = () => {
    const dispatch = useDispatch()
  const { show, user, checkForm } = useSelector((state) => state.userSlice);
  const { name, age, address, image, email } = user;

  const handleSignUp = () => {
   if (checkForm=="Add"){
     dispatch(addUser(user));
    }else if(checkForm=="Edit"){
      dispatch(editUser(user))
    }
    dispatch(handleClose());
  };
  return (
    <>
      <Modal show={show} onHide={() => dispatch(handleClose())}>
        <Modal.Header closeButton>
          <Modal.Title>{checkForm} User</Modal.Title>
        </Modal.Header>
        {checkForm == "Add" || checkForm == "Edit" ? (
          <Modal.Body>
            <form action="">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputName"
                  placeholder="name@example.com"
                  name="name"
                  value={name}
                  onChange={(e) =>
                    dispatch(handleUser({ [e.target.name]: e.target.value }))
                  }
                />
                <label htmlFor="floatingInputName">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputEmail"
                  placeholder="name@example.com"
                  name="email"
                  value={email}
                  onChange={(e) =>
                    dispatch(handleUser({ [e.target.name]: e.target.value }))
                  }
                />
                <label htmlFor="floatingInputEmail">Email</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInputAge"
                  placeholder="name@example.com"
                  name="age"
                  value={age}
                  onChange={(e) =>
                    dispatch(handleUser({ [e.target.name]: e.target.value }))
                  }
                />
                <label htmlFor="floatingInputAge">Age</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputAddress"
                  placeholder="name@example.com"
                  name="address"
                  value={address}
                  onChange={(e) =>
                    dispatch(handleUser({ [e.target.name]: e.target.value }))
                  }
                />
                <label htmlFor="floatingInputAddress">Address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputPhoto"
                  placeholder="name@example.com"
                  name="image"
                  value={image}
                  onChange={(e) =>
                    dispatch(handleUser({ [e.target.name]: e.target.value }))
                  }
                />
                <label htmlFor="floatingInputPhoto">Photo</label>
              </div>
            </form>
            <div className="text-center">
              <Button variant="success" onClick={handleSignUp}>
                {checkForm} User
              </Button>
            </div>
          </Modal.Body>
        ) : (
          <UserDetails />
        )}
      </Modal>
    </>
  );
};

export default ModalForm;
