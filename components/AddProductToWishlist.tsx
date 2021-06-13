export interface AddProductToWishlistProps {
  addToWishlist: () => void;
  requestClose: () => void;
}

export default function AddProductToWishlist({
  addToWishlist,
  requestClose,
}: AddProductToWishlistProps) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={addToWishlist}>Sim</button>
      <button onClick={requestClose}>Não</button>
    </span>
  );
}
