type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const StoreItem = ({ id, name, price, imageUrl }: StoreItemProps) => {
  return <div>StoreItem</div>;
};

export default StoreItem;
