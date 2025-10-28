import { Link } from 'react-router';
import { useGetProducts } from './hooks/useGetProducts';
import '../../styles/ProductList.css';

export function ProductList() {
  const { products } = useGetProducts();

  return (
    <div>
      <input type="text" role="searchbox" placeholder="Search here" />
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
              <Link to={`/products/${product.id}`}>More details</Link>
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
