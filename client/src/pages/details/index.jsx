import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
const DetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const getProduct = async () => {
    const response = await axios.get(`http://localhost:8080/products/${id}`);
    setProduct(response.data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div id="details">
      <div className="container">
        <div className="details">
          <div className="img">
            <img src={product.image} alt="" />
          </div>
          <div className="about">
            <h1>{product.name}</h1>
            <h3>{product.model}</h3>
            <p>${product.price}.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
