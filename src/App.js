
import 'bootstrap/dist/css/bootstrap.min.css'
import Style  from './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Products from './Pages/Products.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
import Posts from './Pages/Posts.jsx'
import Error from './Pages/Error.jsx'
const App = () => {
  return(
   <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About Page/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="products/:productId" element={<SingleProduct/>}/>
      <Route path="posts" element={<Posts/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  </div>
  )
}

export default App
