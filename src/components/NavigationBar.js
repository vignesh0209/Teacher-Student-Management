import  React, {Usestate} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
 



function NavigationBar(){


    return(
        <>
        <div className='navbar'>
            <div className='heading'>
            <h1> Teacher & Student Management</h1>
            </div>
            <div className='buttons'>
            <Button className='view-btn'><Link to = "/view" className='v'>VIEW</Link></Button>
            <Button className='create-btn'><Link to = "/Create" className='c'>CREATE</Link></Button>
            </div>
        </div>
        </>
    )
}

export default NavigationBar;