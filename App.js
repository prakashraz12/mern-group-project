import Counter from "./pages/Counter";
import Todo from "./pages/Todo";
import Product from "./pages/Product";
import Header from './components/Header';
import ProductDetail from './pages/ProductDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:productID" element={<ProductDetail />} />
        <Route path="*" element={<h1>Sorry, Page Not Found!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;