import React, { useState, useContext } from 'react';
import classes from './Login.module.css';
import AuthContext from '../../store/auth-context';

const LoginForm = ({ showSignupHandler, hideLogin }) => {
    const [userUsername, setUserUsername] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const { allUsers, setIsLoggedIn, loggedInUser, setLoggedInUser, setNewUser, newUser } = useContext(AuthContext);
    // const [existingUser, setExistinguser] = useState(false);
    // const ctx = useContext(AuthContext);
    // const allUser = ctx.allUsers;

    // console.log(allUser)

    // const handleUsernameChange = (e) =>{
    //     setUserUsername(e.target.value);
    // }

    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        // console.log(allUsers)


        const existingUser = allUsers.filter(user => {
            return userUsername === user.username
        });

        if (existingUser.length > 0) {
            const userCheck = existingUser[0];

            if (userCheck.password !== userPassword) {
                alert("Wrong and wrongest password ever");
                return;
            }

            if (userCheck.username === userUsername && userCheck.password === userPassword) {
                setIsLoggedIn(true);
                hideLogin();
                console.log(userUsername)

                const toSetUser = {

                    username: userUsername,
                    blogpost: []
                }
                setNewUser(toSetUser)
                alert("Make sense, you're logged in");

                console.log(newUser)
                return;
            }
        }

        if (existingUser <= 0) {
            alert("You no exist here, dakun sign up ASAP");
        }
    }


    return (

        <React.Fragment>
            <div className={classes.backdrop} onClick={hideLogin}>

            </div>

            <div className={classes.overlay}>
                <h3>Welcome Back</h3>
                <h2>Login into your account</h2>

                <form action="" onSubmit={handleLogin}>
                    <label htmlFor="" className={classes.loginLabel}>Username</label>
                    <input type="text" className={classes.loginInput} placeholder='Enter your email or username' value={userUsername} onChange={e => setUserUsername(e.target.value)} />

                    <label htmlFor="" className={classes.loginLabel}>Password</label>
                    <input type="password" className={classes.loginInput} placeholder='Enter your password' value={userPassword} onChange={handlePasswordChange} />

                    <button className={classes.loginButton}>Login Now</button>

                    <h3>Not Registered yet? <span onClick={showSignupHandler}>Register</span> </h3>

                </form>

            </div>



        </React.Fragment>
    );
}

export default LoginForm;