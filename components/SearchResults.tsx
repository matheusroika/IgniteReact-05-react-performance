import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  totalPrice: number;
  addToWishlist: (id: number) => void;
}

export function SearchResults({
  results,
  totalPrice,
  addToWishlist,
}: SearchResultsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addToWishlist={addToWishlist}
        />
      ))}
    </div>
  );
}
