export default function Cart({cart}) {
    
    const cartTotal = cart.reduce((total, item) => total + item.itemPrice, 0)
    
    return (
        <>
            <h3>Number of items: {cart.length}</h3>
            {/* we could map over each object in cart to display details  */}
            <h3>Total: ${cartTotal}</h3>
        </>
    )
}