import classes from './Header.module.css'

const Header = (props) => {
    return ( 
        <div className={ classes.header }>
            <h1>EarlBlog</h1>

            <nav>
                <p onClick={ props.showLogin }>Login</p>
                <p onClick={ props.showSignup  }>Signup</p>
            </nav>
        </div>
     );
}
 
export default Header;