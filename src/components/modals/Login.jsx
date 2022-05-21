import classes from './Login.module.css'

const Login = (props) => {
    return ( 
        <div className={ classes.backdrop } onClick={ props.hideLogin }>

            <div>
                <h3>Welcome Back</h3>
                <h2>Login into your account</h2>

                <form action="">
                    <label htmlFor="" className={ classes.loginLabel }>Username</label>
                    <input type="text" className={ classes.loginInput }/>

                    <label htmlFor="" className={ classes.loginLabel }>Password</label>
                    <input type="password" className={ classes.loginInput }/>

                    <button className={ classes.loginButton }>Login Now</button>

                    <h3>Not Registered yet? Register</h3>

                </form>

            </div>

        </div>
     );
}
 
export default Login;