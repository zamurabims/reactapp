import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { useProducts, useProductsFilter, useModal } from './hooks';
import ProductCard from './components/ProductCard';
import CategoryFilter from './components/CategoryFilter';
import { Modal } from './components/modal/Modal';
import { Product } from './mocks';

function App() {
  const { products } = useProducts();
  const { search, setSearch, filteredProducts, category, setCategory, categories } =
    useProductsFilter(products);
  const { isOpen, open, close } = useModal();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    open();
  };

  return (
    <div className="app">
      <header>
        <h1>Магазин</h1>
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter categories={categories} selected={category} onChange={setCategory} />
      </header>

      <main>
        <div className="products-grid">
          {filteredProducts.map(product => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleOpenModal(product)}
              />
            );
          })}
        </div>
      </main>

      <Modal isOpen={isOpen} onClose={close}>
        {selectedProduct && (
          <div style={{ width: 500, padding: 24 }}>
            <h2>{selectedProduct.title}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <p>{selectedProduct.description}</p>
            <p>Цена: {selectedProduct.price}₽</p>
            <p>Категория: {selectedProduct.category}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;
