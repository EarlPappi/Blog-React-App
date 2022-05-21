import React from "react";
import classes from '../../Global/Global.module.css'
import classesAlt from './CreateForm.module.css'


const CreateFrom = () => {
    return ( 
        <React.Fragment>
            <form action="" >
                <input type="text" placeholder="How are you feeling today" className={ classesAlt.createInput }/>
                <button className={ classesAlt.createButton }>Post</button>
            </form>
        </React.Fragment>
     );
}
 
export default CreateFrom;