import { useEffect, useState } from 'react';
import { Product } from '../mocks';

interface UseProductsReturn {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/products')
      .then(response => {
        if (!response.ok) throw new Error('Request error 404');
        return response.json();
      })
      .then((data: Product[]) => setProducts(data))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { products, isLoading, error };
}
