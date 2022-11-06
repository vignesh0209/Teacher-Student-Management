import React from "react";
import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";








function Create(){

    
    return(
        <>
            <div className="heading2">
                <Button className="teachercreate-btn"><Link to = "/teachercreate" className="TC">TEACHER</Link></Button>
                <Button className="studentcreate-btn"><Link to = "/studentcreate" className="SC">STUDENT</Link></Button>
            </div>
        </>
    )
}

export default Create;