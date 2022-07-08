import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

interface IStoreItemPropo{
    id:number;
    name: string;
    price:number;
    imgUrl: string
}

export function StoreItem({id, name, price, imgUrl} : IStoreItemPropo){
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id);
    return (
    <Card className="h-100">
        <Card.Img className="object-cover h-[200px]" variant="top" src={imgUrl}/>
        <Card.Body className="flex flex-col">
            <Card.Title className="flex justify-between items-baseline mb-[30px]">
                <span className="text-2xl">{name}</span>
                <span className="ml-2 text-gray-500">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mx-[20px] my-[10px]">
                {quantity === 0 ? (
                    <Button className="w-full" onClick={() => increaseCartQuantity(id)}>Add To Cart</Button>
                ) : <div className="flex items-center flex-col gap-y-[0.5rem]">
                        <div className="flex items-center justify-center gap-y-[0.5rem]">
                            <Button className="text-5xl" onClick={() => decreaseCartQuantity(id)}>-</Button>
                            <div className="mx-[10px]">
                                <span className="text-xl">{quantity}</span> in cart
                            </div>
                            <Button className="" onClick={() => increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button variant="danger" className="text-sm" onClick={() => removeFromCart(id)}>Remove</Button>
                    </div>}
            </div>
        </Card.Body>
    </Card>
    )
}