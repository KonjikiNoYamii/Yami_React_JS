import { useCart } from "../context/cartContext";

export default function CartDisplay() {
    const { removeCart, clearCart, total, cart} = useCart()

    return(
        <div>
            {cart.length === 0?
            (
                <p>keranjang masih kosong</p>
            ):(
                <>
                    {cart.map((item) =>
                    <div key={item.id}>
                        <span>
                            {item.title} x {item.quantity} = $ {(item.price * item.quantity).toFixed(2)}
                            {""}
                        </span>
                        <button onClick={() => removeCart(item.id)}>remove</button>
                    </div> )}
                    <h3>total harga $ {total.toFixed(2)}</h3>
                    <button onClick={clearCart}>clear</button>
                </>
            )}

        </div>
        )
}