import * as yup from "yup";

export const productsSchema = yup.object().shape({
  image: yup.string().required("write product image url").url("must be url"),
  name: yup.string().required("write product name"),
  model: yup.string().required("write product model"),
  price: yup.number().required("write product price"),
});
