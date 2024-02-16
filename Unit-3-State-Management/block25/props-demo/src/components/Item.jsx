export default function Item({name, price}) {
    return (
        // name, price
        <>
            <h3>{name}</h3>
            <p>${price}</p>
            <button>Add to cart</button>
        </>
    )
}

