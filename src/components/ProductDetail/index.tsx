import '../../styles/ProductDetail.css';
import { useGetProduct } from './hooks/useGetProduct';

export function ProductDetail() {
  const {product} = useGetProduct()

  return (
    <section className="product-container">
      <div className="img-card">
        <img
          src={`${product?.image()}`}
          alt={`${product?.title()}`}
          id="featured-image"
        />
      </div>

      <div className="product-info">
        <h3>{product?.title()}</h3>
        <h4>{`Price: $${product?.price()}`}</h4>
        <p>
          {product?.description()}
        </p>
      </div>
    </section>
  );
}
