interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ categories, selected, onChange }: CategoryFilterProps) {
  return (
    <div className="category-filter">
      {`Selected: (${selected})`}
      <button onClick={() => onChange('')}>Все</button>
      {categories.map(category => (
        <button key={category} onClick={() => onChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}
