import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getData } from "../../redux/slice/dataSlice";
import { Link } from "react-router-dom";
import { Input } from "antd";
import "./index.scss";
import { addProduct, removeProduct } from "../../redux/slice/wishlistslice";
const ProductsCard = () => {
  const [sort, setSort] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const product = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getData(""));
  }, []);
  const handleSortByPrice = () => {
    setSort(!sort);
    sort ? dispatch(getData(1)) : dispatch(getData());
  };
  const handleDelete = (id) => {
    dispatch(deleteData(id)).then(() => dispatch(getData()));
  };
  return (
    <div id="products">
      <div className="container">
        <div className="products">
          <p className="head">Popular Item in the market</p>
          <h1>Trending Product</h1>
          <div className="line"></div>
          <div className="inp-btn">
            <div className="search">
              <Input
                onChange={(e) => dispatch(getData(e.target.value))}
                placeholder="Search product..."
              />
            </div>
            <button onClick={() => handleSortByPrice()}>Sort By Price</button>
          </div>
          <div className="cards">
            {products.data?.map((element) => {
              return (
                <div key={element._id} className="card">
                  <Link to={`/${element._id}`}>
                    <div className="img">
                      <img src={element.image} alt="" />
                    </div>
                  </Link>
                  <div className="info">
                    {product.data.find((elem) => elem._id === element._id) ? (
                      <div
                        onClick={() => dispatch(removeProduct(element._id))}
                        className="icon"
                      >
                        <i className="fa-solid fa-heart"></i>
                      </div>
                    ) : (
                      <div
                        onClick={() => dispatch(addProduct(element))}
                        className="icon"
                      >
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    )}

                    <p>{element.model}</p>
                    <h3>{element.name}</h3>
                    <div className="price">${element.price}.00</div>
                    <button onClick={() => handleDelete(element._id)}>
                      Delete Product
                    </button>
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

export default ProductsCard;
