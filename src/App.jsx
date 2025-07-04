import { useState } from 'react';
import ListProducts from './components/ListProducts';

const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];



function App() {
  const [addedProducts, SetAddedProducts] = useState([]);
  const totalPrice = addedProducts.reduce((acc, curr) => {
    return acc + (curr.price * curr.quantity);
  }, 0);

  function addProduct(product) {
    const findProduct = addedProducts.find(p => p.name === product.name);
    if (findProduct) {
      updateProductQuantity(findProduct.name, findProduct.quantity + 1);
      return;
    }
    SetAddedProducts(curr => [...curr, { ...product, quantity: 1 }]);

  }

  function updateProductQuantity(name, quantity) {
    SetAddedProducts(curr => curr.map(p => p.name === name ? { ...p, quantity } : p));
  }

  function removeFromCart(product) {
    SetAddedProducts(curr => curr.filter(p => p.name !== product.name));
  }


  return (
    <>
      <h1>Lista Prodotti</h1>
      <ListProducts products={products} addProduct={addProduct} removeFromCart={removeFromCart} />

      {addedProducts.length > 0 && (
        <>
          <h2>List dei prodotti nel carrello</h2>
          <div>Totale nel carrello: {totalPrice.toFixed(2)} €</div>
          {addedProducts.map((p, index) => (
            <div key={index}>
              <h3>{p.name}</h3>
              <p>Price: {p.price.toFixed(2)} €</p>
              <p>Quantity: {p.quantity}</p>
              <button onClick={() => removeFromCart(p)}>Rimuovi dal carrello</button>
            </div>
          ))}
        </>)
      }
    </>
  );
}

export default App;
