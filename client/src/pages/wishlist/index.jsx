import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss"
const WishlistPage = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <div id="wishlist">
      <div className="container">
        <div className="wishlist">
          <div className="cards">
            {product.data?.map((element) => {
              return (
                <div key={element._id} className="card">
                  <div className="img">
                    <img src={element.image} alt="" />
                  </div>
                  <div className="info">
                    <p>{element.model}</p>
                    <h3>{element.name}</h3>
                    <div className="price">${element.price}.00</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
