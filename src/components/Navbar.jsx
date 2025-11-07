import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { handleShow } from "../utility/UserSlice";

const Navbar = () => {
  const dispatch = useDispatch()
  const handleAdd = ()=>{
      dispatch(handleShow())
  } 
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin Pannel
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Button 
            className="me-5"
            variant="primary" 
            onClick={handleAdd}
            >
              SignUp
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
