import { Link } from 'react-router-dom';
import './MainNavigation.css';
const  MainNavigation =()=>{
    return(
        <header className= 'header__container'>
            <div className='logo__container'>
                <p className='logo'> Meetups</p>
            </div>

            <nav className='nav__menu'>
                <ul className='nav__list'>

                    <li className='nav__link'><Link to="/" className='nav__react-link'>All Meetups</Link></li>

                    <li className='nav__link'><Link to="/new" className='nav__react-link'>Add New Meetups</Link></li>

                    <li className='nav__link'><Link to="/fav" className='nav__react-link'>My Favourites</Link></li>


                </ul>
            </nav>
       </header>

    );
};
export default MainNavigation;