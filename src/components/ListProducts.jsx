export default function ListProducts({ products }) {
    console.log(products);

    return (
        <div>
            {products.map((product, index) => (
                <div key={index}>
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                </div>
            ))}
        </div>
    );
}