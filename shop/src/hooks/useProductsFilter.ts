import { Product } from '../mocks';
import { useMemo, useState } from 'react';

interface UseProductsFilterReturn {
  search: string;
  setSearch: (s: string) => void;
  category: string;
  setCategory: (c: string) => void;
  categories: string[];
  filteredProducts: Product[];
}

export function useProductsFilter(products: Product[]): UseProductsFilterReturn {
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const categories = useMemo(() => Array.from(new Set(products.map(p => p.category))), [products]);

  const filteredProducts = useMemo(
    () =>
      products.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === '' || item.category === category;

        return matchesCategory && matchesSearch;
      }),
    [products, search, category]
  );

  return { search, setSearch, category, setCategory, categories, filteredProducts };
}
