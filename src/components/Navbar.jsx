import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='nav-content'>
          <div className='nav-left'>
            <NavLink className='nav-link' to='/'>
              <img className='logo' src={logo} alt='React Jobs' />
              <span className='logo-text'>
                React Jobs
              </span>
            </NavLink>
            <div className='nav-link-space'>
              <NavLink to='/' className='nav-link' activeClassName='nav-link-active'>
                Home
              </NavLink>
              <NavLink to='/jobs' className='nav-link' activeClassName='nav-link-active'>
                Jobs
              </NavLink>
              <NavLink to='/add-job' className='nav-link' activeClassName='nav-link-active'>
                Add Job
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
