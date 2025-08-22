import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authAction } from './store/counterStore';

const Header = () => {
  const dispatch = useDispatch()

  const handleLogout = ()=> {
    dispatch(authAction.logout())
  }

  const isAuth = useSelector(state => state.auth.isAuthenticated)
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuth && <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Header;
