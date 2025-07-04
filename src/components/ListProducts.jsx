export default function ListProducts({ products, SetAddedProducts, addedProducts }) {

    function addProduct(product) {
        const findProduct = addedProducts.find(p => p.name === product.name);
        if (findProduct) {
            updateProductQuantity(findProduct);
        } else {

            SetAddedProducts(curr => [...curr, { ...product, quantity: 1 }]);
        }
    }

    function updateProductQuantity(product) {
        product.quantity += 1;
        SetAddedProducts(curr => curr.map(p => p));
    }
    function removeFromCart(product) {
        SetAddedProducts(curr => curr.filter(p => p.name !== product.name));
    }

    return (
        <div>
            {products.map((product, index) => (
                <div key={index}>
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                    <button onClick={() => addProduct(product)}>Aggiungi al carrello</button>
                    <button onClick={() => removeFromCart(product)}>Rimuovi dal carrello</button>
                </div>
            ))}
        </div>
    );
}