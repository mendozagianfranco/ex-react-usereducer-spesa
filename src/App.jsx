import { useEffect, useState } from 'react';
import ListProducts from './components/ListProducts';

const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];


function App() {
  const [addedProducts, SetAddedProducts] = useState([]);

  return (
    <>
      <h1>Lista Prodotti</h1>
      <ListProducts products={products} addedProducts={addedProducts} SetAddedProducts={SetAddedProducts} />

      <h2>List dei prodotti nel carrello</h2>
      {addedProducts.map((p, index) => (
        <div key={index}>
          <h3>{p.name}</h3>
          <p>Price: {p.price}</p>
          <p>Quantity: {p.quantity}</p>
        </div>
      ))}

    </>
  );
}

export default App;
