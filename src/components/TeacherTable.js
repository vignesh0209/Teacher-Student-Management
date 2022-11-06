import React from "react";
import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap';





function TeacherTable(){

    
    return(

        <>
       

         <table id="teacher-table">
            <tr>
                <th>Teacher.ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Students</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>1</td>
                <td>vicky</td>
                <td>vignesh@gmail.com</td>
                <td>7904975881</td>
                <td>vicky</td>
                <td><Button>Edit</Button><Button>Delete</Button></td>
            </tr>
             <tr>
                <td>2</td>
                <td>vicky</td>
                <td>vignesh@gmail.com</td>
                <td>7904975881</td>
                <td>vicky</td>
                <td><Button>Edit</Button><Button>Delete</Button></td>
            </tr>
             <tr>
                <td>3</td>
                <td>vicky</td>
                <td>vignesh@gmail.com</td>
                <td>7904975881</td>
                <td>vicky</td>
                <td><Button>Edit</Button><Button>Delete</Button></td>
            </tr>
             <tr>
                <td>4</td>
                <td>vicky</td>
                <td>vignesh@gmail.com</td>
                <td>7904975881</td>
                <td>vicky</td>
                <td><Button>Edit</Button><Button>Delete</Button></td>
            </tr>
        </table>
        </>
    )
}

export default TeacherTable;
