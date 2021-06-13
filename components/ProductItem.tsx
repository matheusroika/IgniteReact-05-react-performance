import { memo, useState } from "react";
import dynamic from "next/dynamic";
import { AddProductToWishlistProps } from "./AddProductToWishlist";

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => {
    return import("./AddProductToWishlist");
  },
  {
    loading: () => <span>Carregando...</span>,
  }
);

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  addToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, addToWishlist }: ProductItemProps) {
  const [isProductOnWishlist, setIsProductOnWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsProductOnWishlist(true)}>
        Adicionar a wishlist
      </button>
      {isProductOnWishlist && (
        <AddProductToWishlist
          addToWishlist={() => addToWishlist(product.id)}
          requestClose={() => setIsProductOnWishlist(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
