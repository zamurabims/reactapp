import React, { useState } from 'react';
import './App.css';
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
        <header className="app-header">
          <div className="header-inner">
            <h1 className="app-title">Ма<span>га</span>зин</h1>
            <div className="header-divider" />
            <div className="header-controls">
              <SearchBar value={search} onChange={setSearch} />
              <CategoryFilter
                categories={categories}
                selected={category}
                onChange={setCategory}
              />
            </div>
          </div>
        </header>

        <main className="app-main">
          <div className="section-label">
            {filteredProducts.length} товаров
          </div>

          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleOpenModal(product)}
                />
              ))
            ) : (
              <div className="empty-state">
                <div className="empty-state-icon">◈</div>
                <p>Ничего не найдено</p>
              </div>
            )}
          </div>
        </main>

        <Modal isOpen={isOpen} onClose={close}>
          {selectedProduct && (
            <div className="modal-product">
              <img
                className="modal-product-image"
                src={selectedProduct.image}
                alt={selectedProduct.title}
              />
              <div className="modal-product-body">
                <div className="modal-product-category">
                  {selectedProduct.category}
                </div>
                <h2 className="modal-product-title">{selectedProduct.title}</h2>
                <p className="modal-product-desc">{selectedProduct.description}</p>
                <div className="modal-product-footer">
                  <div className="modal-product-price">
                    {selectedProduct.price}<span>₽</span>
                  </div>
                  <button className="modal-btn">В корзину</button>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
  );
}

export default App;