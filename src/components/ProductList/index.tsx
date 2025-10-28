import { Link } from 'react-router';
import '../../styles/ProductList.css';
import useFilteredProducts from './hooks/useFilteredProducts';

export function ProductList() {
  const { filteredProducts: products, handleChange, isLoading } = useFilteredProducts();

  return (
    <div>
      {/* TODO: Add clear filter cta */}
      <input
        type="text"
        role="searchbox"
        placeholder="Search here"
        onChange={handleChange}
      /> 
      {isLoading ? (
        <p>Loading products...</p> // TODO: Add skeleton
      ) : (
        <section className="collection">
          {products?.map((product) => (
          <div key={product.id()} className="card">
            <img
              src={product.image()}
              alt={product.title()}
              style={{ width: 100 }}
            />
            <h1>{product.title()}</h1>
            <p className="price">${product.price()}</p>
            <p>{product.category()}</p>
            <p>
              <Link to={`/products/${product.id()}`}>More details</Link>
            </p>
          </div>
        ))}
        </section>
      )}
    </div>
  );
}
