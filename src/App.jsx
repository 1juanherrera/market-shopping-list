import './App.css'
import ProductCard from './components/ProductCard'
import productsList from './data/products'

function App() {

  return (
    <div className="App">
    <h1>Market shopping list</h1>
    {
      productsList.map( ( product, index ) => {
        return <ProductCard productData={product} key={`product-${index}`}/>
      })
    }
  </div>
  )
}

export default App
