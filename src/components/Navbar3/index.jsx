import { NavLink } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'

const Navbar3 = () => {
  const [open, setOpen] = useState(false)
  const locations = [
    { 
      path: '/',
      name: 'home',
      childrenLinks: []
    },
    { 
      path: '/movies',
      name: 'movies',
      childrenLinks: [
        {
          path: '/movies/horror',
          name: 'horror',
        },
        {
          path: '/movies/action',
          name: 'action',
        }
      ]
    },
    { 
      path: '/cart',
      name: 'cart',
      childrenLinks: []
    },
  ]
  return (
    <nav className='custom-navbar'>
      <span>Navbar Custom!</span>
      <ul className='custom-navbar-ul'>
        {
          locations.map((location, index) => 
            <li key={`${location.name}-${index}`} onClick={location.childrenLinks.length > 0 ? () => setOpen(!open) : () => null}>
              <NavLink className={({ isActive}) => isActive ? "active" : ""} to={location.path}>
                {location.name}
                {
                  location.childrenLinks.length > 0 ? 
                    <ul className={`custom-navbar-children ${open ? 'open' : ''}`}>
                      {
                        location.childrenLinks.map((locationChild, index) => (
                          <li key={`${locationChild.name}-${index}`}>
                            <NavLink className={({ isActive}) => isActive ? "active" : ""} to={locationChild.path}>
                              {locationChild.name}
                            </NavLink> 
                          </li>
                        ))
                      }
                    </ul>
                  : null
                }
              </NavLink>
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar3