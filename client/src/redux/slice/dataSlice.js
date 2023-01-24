import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  data: undefined,
  error: "",
};

export const getData = createAsyncThunk("getData", async (value) => {
  const response = await axios.get("http://localhost:8080/products");
  if (value === 1) {
    return response.data.sort((a, b) => a.price - b.price);
  } else if (value) {
    return response.data.filter((elem) =>
      elem.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
  } else {
    return response.data;
  }
});

export const postData = createAsyncThunk("postData", async (values) => {
  await axios.post("http://localhost:8080/products", values);
});

export const deleteData = createAsyncThunk("deleteData", async (id) => {
  await axios.delete(`http://localhost:8080/products/${id}`);
});

export const dataSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = false;
      state.error = "Data not found";
    });
  },
});

export default dataSlice.reducer;
