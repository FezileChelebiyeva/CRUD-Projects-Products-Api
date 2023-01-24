import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../pages/add-product'
import DetailsPage from '../pages/details'
import HomePage from '../pages/home-page'
import WishlistPage from '../pages/wishlist'

const Routing = () => {
  return (
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailsPage />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
  )
}

export default Routing