import { Product } from '../mocks';

interface ProductsCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductsCardProps) {
  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <img src={product.image} alt={product.title} loading="lazy" />
      <div className="product-info">
        <h3 className="title">{product.title}</h3>
        <p className="price">{product.price}</p>
        <span className="category">{product.category}</span>
      </div>
    </div>
  );
}
