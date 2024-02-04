import { Link } from 'react-router-dom'

// import Logo from '@/assets/logo/logo-example.png'
import InstaIcon from '@/assets/icons/icon-instagram.svg'
import FBIcon from '@/assets/icons/icon-fb.svg'

import './menunav.styles.css'

const Menu = () => {
  return (
    <>
      <li>
        <Link to='/proyecto' unstable_viewTransition>
          El proyecto
        </Link>
      </li>

      <li>
        <Link to='/sostenibilidad' unstable_viewTransition>
          Sostenibilidad
        </Link>
      </li>
      <li>
        <Link to='/aporte-regional' unstable_viewTransition>
          Aporte Regional
        </Link>
      </li>
      <li>
        <Link to='/quienes-somos' unstable_viewTransition>
          Quiénes somos
        </Link>
      </li>
      <li>
        <Link to='/preguntas-frecuentes' unstable_viewTransition>
          Preguntas frecuentes
        </Link>
      </li>
    </>
  )
}

const Navbar = () => {
  return (
    <nav className='navbar bg-transparent px-4 md:px-10'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <Link to='/' unstable_viewTransition>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </Link>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
          >
            <Menu />
          </ul>
        </div>
        <a className='btn btn-ghost text-xl'>daisyUI</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <Menu />
        </ul>
      </div>
      <div className='navbar-end gap-4'>
        <a
          href='https://www.instagram.com/minera_vizcachitas/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Link que te dirige al perfil de Instagram de Minera Vizcachitas'
        >
          <img
            className='size-5 sepia-0 transition-all duration-700 hover:scale-125 hover:sepia'
            src={InstaIcon}
            alt='Icono de Instagram'
          />
        </a>
        <a
          href='https://web.facebook.com/MineraVizcachitas/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Link que te dirige al perfil de Facebook de Minera Vizcachitas'
        >
          <img
            className='size-5 sepia-0 transition-all duration-700 hover:scale-125 hover:sepia'
            src={FBIcon}
            alt='Icono de Facebook'
          />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
