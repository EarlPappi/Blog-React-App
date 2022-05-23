import React, { useContext } from "react";
import AuthContext from "../../../store/auth-context";
import classes from '../../Global/Global.module.css'
import classesAlt from './CreateForm.module.css'


const CreateFrom = ({showLoginHandler}) => {

    const { isLoggedIn, loggedInUser } = useContext(AuthContext);

    const postSubmitHandler = (e) => {
        e.preventDefault()
        if (!isLoggedIn) {
            alert("You're not logged in, kindly login or signup to make post!")
            showLoginHandler();

        }

        if(isLoggedIn){
            alert("Post created successfully")
        }
    }

    return (
        <React.Fragment>
            <form action="" onSubmit={postSubmitHandler}>
                <input type="text" placeholder="How are you feeling today" className={classesAlt.createInput} />
                <button className={classesAlt.createButton}>Post</button>
            </form>
        </React.Fragment>
    );
}

export default CreateFrom;