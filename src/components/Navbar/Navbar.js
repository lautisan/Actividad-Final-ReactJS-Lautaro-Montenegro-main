import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
      <nav className="NavBar" >
          <Link to='/'>
            <h3>Ecommerce</h3>
          </Link>
          <div className="Categories">
              <NavLink to='/category/Mother' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mother</NavLink>
              <NavLink to='/category/CPU' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>CPU</NavLink>
              <NavLink to='/category/GPU' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>GPU</NavLink>
              <NavLink to='/category/Gabinete' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Gabinete</NavLink>
          </div>
          <CartWidget />
      </nav>
  )
}

export default NavBar