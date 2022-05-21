import Wrapper from './components/layout/wrapper';
import classes from './components/Global/Global.module.css'
import CreateCon from './components/Posts/PostCreate/CreateCon';
import React, { useState, useContext } from 'react';
import AuthContext from './store/auth-context';
import Header from './components/layout/Header';
import Signup from './components/modals/Signup';
import LoginForm from './components/modals/LoginFom';



function App() {

  // const ctx = useContext(AuthContext);
  // const allUsers = ctx.allUsers;


  
  const [displayLogin, setDisplayLogin] = useState(false);
  const [displaySignup, setDisplaySignup] = useState(false);

  // Global state  
  const [loggedInUser, setLoggedInUser] = useState({
    id: 1,
    username: 'Earl',
    password: 'earl',
    blogposts: []
  });

  const [allUsers, setAllUsers] = useState([{
    id: 1,
    username: 'Earl',
    password: 'earl',
    blogposts: []
  },
  {
    id: 2,
    username: 'Pappi',
    password: 'pappi',
    blogposts: []
  }])

  const [userExist, setUserExist] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const hideLoginHandler = () => {
    setDisplayLogin(false);
  }

  const showLoginHandler = () => {
    setDisplaySignup(false)
    setDisplayLogin(true);
  }

  const showSignupHandler = () => {
    setDisplayLogin(false);
    setDisplaySignup(true);
  }

  const hideSignupHandler = () => {
    setDisplaySignup(false);
  }


  return (
    <React.Fragment>
      <AuthContext.Provider value={[allUsers, setAllUsers, loggedInUser, setLoggedInUser, isLoggedIn, setIsLoggedIn, userExist, setUserExist]}>

        <Wrapper>
          <Header showLogin={showLoginHandler} showSignup={showSignupHandler} />

          <React.Fragment>
            <h1>Hello {allUsers[0].username}</h1>
            <p className={classes.h1alt}>How are you doing today? Would you like to share something with the community 🤗</p>
          </React.Fragment>

          <CreateCon />
        </Wrapper>


        {displayLogin && <LoginForm showSignupHandler={showSignupHandler} hideLogin={hideLoginHandler} />}
        {displaySignup && <Signup showLoginHandler={showLoginHandler} hideSignup={hideSignupHandler} />}

      </AuthContext.Provider>
    </React.Fragment >
  );
}

export default App;
