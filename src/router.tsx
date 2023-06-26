import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import NotFound from './pages/NotFound';

function RouterPage() {
  return (
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/details" element={<ProductDetailsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RouterPage;
