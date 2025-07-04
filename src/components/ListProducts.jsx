export default function ListProducts({ products, addProduct }) {


    return (
        <div>
            {products.map((product, index) => (
                <div key={index}>
                    <h2>{product.name}</h2>
                    <p>Price: {product.price.toFixed(2)} €</p>
                    <button onClick={() => addProduct(product)}>Aggiungi al carrello</button>

                </div>
            ))}
        </div>
    );
}