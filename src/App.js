import logo from "./logo.svg"
import "./App.css"
import Header from "./conatiners/Header"
import ProductList from "./conatiners/ProductList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductDetails from "./conatiners/ProductDetails"
import BookContext from "./context/books"

function App() {
  return (
    <div className="App">
      <Router>
        {/* <BookContext.Provider value={5}>
      </BookContext.Provider> */}
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
