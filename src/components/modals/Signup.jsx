import React, { useState } from 'react';
import classes from './Login.module.css'
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const Signup = (props) => {
    const { allUsers, setAllUsers } = useContext(AuthContext)
    const [newUserUsername, setNewUserUsername] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');
    const [usernameExist, setUsernameExist] = useState(null);


    const newUser = {
        id: allUsers.length + 1,
        username: newUserUsername,
        email: newUserEmail,
        password: newUserPassword,

    };

    const handleSignup = (e) => {
        e.preventDefault();

        const existingUser = allUsers.filter(user => {
            return (newUserUsername === user.username || newUserEmail === user.email);
        });

        if (existingUser.length > 0) {
            setUsernameExist(true);
            alert("This ussrname is taken");
            return;
        }

        if (existingUser.length === 0) {
            setUsernameExist(false);

            // setAllUsers([...allUsers, newUser]);
            setAllUsers((prevUser) => {
                return [...prevUser, newUser]
            });

            // move from signup immediately to login for user to enter details
            props.showLoginHandler();
            props.hideSignup();
            return;

        }
    }

    return (
        <React.Fragment>
            <div className={classes.backdrop} onClick={props.hideSignup}>
            </div>

            <div className={classes.overlay}>
                <h3>Sign Up</h3>
                <h2>Create an account to continue</h2>

                {/* { console.log({allUsers}) } */}

                <form action="" onSubmit={handleSignup}>
                    <label htmlFor="" className={classes.loginLabel}>Email</label>
                    <input type="email" className={classes.loginInput} placeholder='Enter your email' onChange={e => setNewUserEmail(e.target.value)} />

                    <label htmlFor="" className={classes.loginLabel}>Username</label>
                    <input type="text" className={classes.loginInput} placeholder='Choose a preferred username' onChange={e => setNewUserUsername(e.target.value)} />

                    <label htmlFor="" className={classes.loginLabel}>Password</label>
                    <input type="password" className={classes.loginInput} placeholder='Choose a strong Password' onChange={e => setNewUserPassword(e.target.value)} />

                    <button className={classes.loginButton}>Sign Up</button>

                    <h3>Have an Account? Go to <span onClick={props.showLoginHandler}>Login</span></h3>

                </form>



            </div>
        </React.Fragment>
    );
}

export default Signup;