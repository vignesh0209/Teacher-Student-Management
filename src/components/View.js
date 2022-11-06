import React from "react";
import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";





function View(){

    
    return(
        <>
            <div className="heading1">
                <Button className="teachertable-btn"><Link to = "/teachertable" className="T">TEACHER</Link></Button>
                <Button className="studenttable-btn"><Link to = "/studenttable" className="S">STUDENT</Link></Button>
            </div>
        </>
    )
}

export default View;
