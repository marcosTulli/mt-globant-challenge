import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import App from './App.tsx';
import { ProductDetail } from './components/ProductDetail.tsx';
import { ProductList } from '@components/ProductList/index.tsx';
import { QueryProvider } from '@components/providers';

createRoot(document.getElementById('root')!).render(
  <QueryProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </QueryProvider>
);
