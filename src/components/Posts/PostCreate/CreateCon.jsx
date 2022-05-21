import React from 'react';
import classes from '../../Global/Global.module.css'
import CreateForm from './CreateForm'
import classes2 from './CreateCon.module.css'

const CreateCon = (props) => {
    return ( 
        <div className={ classes2.holder }>
            <h2>Create Post</h2>
            <CreateForm />
        </div>
     );
}
 
export default CreateCon;