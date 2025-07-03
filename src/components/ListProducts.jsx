export default function ListProducts({ products, SetAddedProducts, addedProducts }) {

    function addProduct(product) {
        if (addedProducts.find(p => p.name === product.name)) return;
        SetAddedProducts(curr => [...curr, { ...product, quantity: 1 }]);
    }

    return (
        <div>
            {products.map((product, index) => (
                <div key={index}>
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                    <button onClick={() => addProduct(product)}>Aggiungi al carrello</button>
                </div>
            ))}
        </div>
    );
}