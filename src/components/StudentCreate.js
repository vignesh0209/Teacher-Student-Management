import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





function StudentCreate(){

    
    return(
        <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
         <Form.Control type="mobile" placeholder="Mobile" />
      </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label></Form.Label>
        <Form.Select>
          <option>Teacher</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </>
    )
}

export default StudentCreate;