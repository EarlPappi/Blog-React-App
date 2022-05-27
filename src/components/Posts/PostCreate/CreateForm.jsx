import React, { useContext, useState } from "react";
import AuthContext from "../../../store/auth-context";
import classesAlt from './CreateForm.module.css'


const CreateFrom = ({showLoginHandler}) => {

    const { isLoggedIn, userBlogs, setUserBlogs } = useContext(AuthContext)

    const [blogEntry, setBlogEntry] = useState('');


    const postSubmitHandler = (e) => {
        e.preventDefault()
        if (!isLoggedIn) {
            alert("You're not logged in, kindly login or signup to make post!")
            showLoginHandler();

        }

        if(isLoggedIn){

            if(blogEntry.trim() <= 0){
                alert("Blog post cannot be empty!");
                return;
            }
            
            alert("Post created successfully")



            setUserBlogs((prev) =>{
                return [...prev, blogEntry]
            });

            console.log(userBlogs)
        }
    }
    

    return (
        <React.Fragment>
            <form action="" onSubmit={postSubmitHandler}>
                <input type="text" placeholder="How are you feeling today" className={classesAlt.createInput} onChange={e => setBlogEntry(e.target.value) }/>
                <button className={classesAlt.createButton}>Post</button>
            </form>
        </React.Fragment>
    );
}

export default CreateFrom;