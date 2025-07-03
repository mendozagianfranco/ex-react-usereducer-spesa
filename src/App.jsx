import ListProducts from './components/ListProducts';

const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

function App() {
  return (
    <>
      <ListProducts products={products} />
    </>
  );
}

export default App;
