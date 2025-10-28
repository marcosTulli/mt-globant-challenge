import { Link } from 'react-router';
import '../styles/ProductList.css';

export function ProductList() {
  /**
   * Render a list of products using https://fakestoreapi.com/products
   */

  return (
    <div>
      <input type="text" role="searchbox" placeholder="Search here" />
      <section className="collection">
        <div className="card">
          <img
            src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png"
            alt="Product example"
            style={{ width: 100 }}
          />
          <h1>Product title</h1>
          <p className="price">$19.99</p>
          <p>Category..</p>
          <p>
            <Link to="/products/ID-HERE">More details</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
