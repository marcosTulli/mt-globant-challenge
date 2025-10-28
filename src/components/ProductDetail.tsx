// import { useParams } from "react-router";
import '../styles/ProductDetail.css';

/**
 * Fetch the correct product, implement a loading logic until the product loads properly.
 */

export function ProductDetail() {
  //const {productId} = useParams();

  return (
    <section className="product-container">
      <div className="img-card">
        <img
          src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png"
          alt=""
          id="featured-image"
        />
      </div>

      <div className="product-info">
        <h3>Product title</h3>
        <h4>Price: $140</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          accusamus natus dolorum. Quaerat nulla quod doloremque, officia quis
          provident amet adipisci unde esse iure delectus, maxime inventore
          optio fuga nisi?
        </p>
      </div>
    </section>
  );
}
