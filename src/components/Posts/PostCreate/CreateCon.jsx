import React, { useContext } from 'react';
import CreateForm from './CreateForm'
import classes2 from './CreateCon.module.css'
import AuthContext from '../../../store/auth-context';

const CreateCon = ({ showLoginHandler }) => {
    const { userBlogs,  loggedInUser} = useContext(AuthContext);


    return (
        <>
            <div className={classes2.holder}>
                <h2>Create Post</h2>
                <CreateForm showLoginHandler={showLoginHandler} />
                
            </div>

                { userBlogs.map(blog =>{
                    return (
                        <div className={ classes2.holder }  key={blog}>
                            <h2>Written By: { loggedInUser }</h2>

                            <div className={ classes2.blogHolder }>
                                <p>{blog}</p>
                            </div>
                            
                            <p className={ classes2.tagline } >They said the pen is mightier than the sword? This is just a demo taglne for all blog posts</p>
                        </div>
                    )
                }) }
           
        </>

    );
}

export default CreateCon;