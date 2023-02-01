import {Link,NavLink} from 'react-router-dom'

const Footer = () => {
  return (
  <footer className='footer'>
    <div className='container'>
        <nav className='d-flex justify-content-between algin-items-center'>
         
          <div className="nav nav-pills">
            <Link to='/' className='a'>Home</Link>
            <Link to='about' className='a'>About</Link>
            <Link to='products' className='a'>Products</Link>
            <Link to='posts' className='a'>Posts</Link>
          </div>
        </nav>
      </div>
   </footer>
  )
}

export default Footer
