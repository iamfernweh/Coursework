export default function Item({name, price, addToCart}) {
    return (
        // name, price
        <>
            <h3>{name}</h3>
            <p>${price}</p>
            <button onClick={() => {
                addToCart(name, price)
            }}>Add to cart</button>
        </>
    )
}