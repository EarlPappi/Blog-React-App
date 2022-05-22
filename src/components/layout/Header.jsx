import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Header.module.css'

const Header = (props) => {
    const [ , , , , , , , , , , isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
    console.log({isLoggedIn});


    return ( 
        <div className={ classes.header }>
            <h1>EarlBlog</h1>

            <nav>
                { isLoggedIn && <p onClick={ props.showLogin }>Login</p>}
                { isLoggedIn && <p onClick={ props.showSignup  }>Signup</p>}
                { !isLoggedIn && <p>You are logged in</p>}
                
            </nav>
        </div>
     );
}
 
export default Header;