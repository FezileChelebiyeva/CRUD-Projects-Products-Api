import React from "react";
import { useFormik } from "formik";
import { productsSchema } from "../../schema";
import { useDispatch } from "react-redux";
import { postData } from "../../redux/slice/dataSlice";
import { Helmet } from "react-helmet";
import "./index.scss";
const AddProduct = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        image: "",
        name: "",
        model: "",
        price: "",
      },
      validationSchema: productsSchema,
      onSubmit: (values) => {
        resetForm();
        dispatch(postData(values));
        console.log(values);
      },
    });

  return (
    <div id="add-product">
      <Helmet>
        <html lang="en" />
        <title>Aroma Shop - Add Product</title>
      </Helmet>
      <div className="container">
        <div className="add-product">
          <h1>Add Product</h1>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input">
                <input
                  id="image"
                  name="image"
                  type="text"
                  onChange={handleChange}
                  value={values.image}
                  placeholder="Image Url"
                />
                {errors.image && touched.image && (
                  <p className="error">{errors.image}</p>
                )}
              </div>
              <div className="input">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Name"
                />
                {errors.name && touched.name && (
                  <p className="error">{errors.name}</p>
                )}
              </div>
              <div className="input">
                <input
                  id="model"
                  name="model"
                  type="text"
                  onChange={handleChange}
                  value={values.model}
                  placeholder="Model"
                />
                {errors.model && touched.model && (
                  <p className="error">{errors.model}</p>
                )}
              </div>
              <div className="input">
                <input
                  id="price"
                  name="price"
                  type="number"
                  onChange={handleChange}
                  value={values.price}
                  placeholder="Price"
                />
                {errors.price && touched.price && (
                  <p className="error">{errors.price}</p>
                )}
              </div>
              <div className="btn">
                <button type="submit">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
