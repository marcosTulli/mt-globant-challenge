import type { ProductDTO, ProductRating } from "./productDTO";

export class Product {
  #id: number;
  #title: string;
  #price: number;
  #description: string;
  #category: string;
  #image: string;
  #rating: ProductRating;

  constructor(
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: ProductRating
  ) {
    this.#id = id;
    this.#title = title;
    this.#price = price;
    this.#description = description;
    this.#category = category;
    this.#image = image;
    this.#rating = rating;
  }

  static FromJSON(json: ProductDTO): Product {
    return new Product(
      json.id,
      json.title,
      json.price,
      json.description,
      json.category,
      json.image,
      json.rating
    );
  }

  id(): number {
    return this.#id;
  }

  title(): string {
    return this.#title;
  }

  price(): number {
    return this.#price;
  }

  description(): string {
    return this.#description;
  }

  category(): string {
    return this.#category;
  }

  image(): string {
    return this.#image;
  }

  rating(): ProductRating {
    return this.#rating;
  }
}

export default Product;
