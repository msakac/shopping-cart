import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

interface CartItemProps {
  id: number;
  quantity: number;
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.imgUrl}
        className="w-[125px] h-[75px] object-cover flex items-center"
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity >= 1 && (
            <span className="text-gray-500 text-[13px]">x{quantity}</span>
          )}
        </div>
        <div className="text-gray-500 text-[13px]">
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
