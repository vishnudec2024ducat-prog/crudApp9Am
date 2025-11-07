import React from "react";

const Product = ({ elm: { title, image,price,description } }) => {
  return (
    <div className="col-lg-3 col-md-4 my-1">
      <div className="card text-center  " style={{ height: "60vh" }}>
        <img
          src={image}
          className="card-img-top p-2 mx-auto rounded rounded-circle border my-0 mt-2"
          alt="..."
          style={{ width: "150px", height: "120px" }}
        />
        <div className="card-body d-flex flex-column justify-content-evenly">
          <p className="card-title m-0 h-25" style={{fontWeight:"600"}}>{title}</p>
          <p
            className="card-text "
            style={{ height: "17vh", overflow: "hidden" }}
          >
            {description}
          </p>
          <h5 className="">price: ${price}</h5>
          <div className="">
            <button href="#" className="btn btn-primary  ">
              Add To Cart
            </button>
            <button href="#" className="btn btn-primary  mx-2 btn-sm">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
