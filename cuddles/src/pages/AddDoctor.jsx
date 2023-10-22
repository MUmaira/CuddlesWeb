import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faLocationArrow, faPhone} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const AddDoctor = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const addDoctorInformation = async () => {













    
  }
  return (
    <div style={{marginTop: '2%'}}>
      <Card style={{marginRight:"50px",marginTop:"20px",marginLeft:"500px",marginBottom:"10px",width:"45%", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',background:"tranparent",zIndex:"1", borderColor:'#FF9494'}}>
        <Card.Text style={{marginTop:'10px', fontSize: '25px', fontWeight: 'bold', color: '#85929E'}}>Doctor Information</Card.Text>
        <Card.Body style={{marginTop:"10px"}}>
        <Form>
         <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
                  First Name 
            </Form.Label>
            <Col sm={10}>
               <Form.Control type="text" placeholder="first name" />
             </Col>
         </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                  Last Name
              </Form.Label>
            <Col sm={10}>
               <Form.Control type="text" placeholder="last name" />
             </Col>
           </Form.Group>

           <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                  Email
              </Form.Label>
            <Col sm={10}>
               <Form.Control type="text" placeholder="email" />
             </Col>
           </Form.Group>

           <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                  Address
              </Form.Label>
            <Col sm={10}>
               <Form.Control type="text" placeholder="Address" />
             </Col>
           </Form.Group>

           <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                  Contact number
              </Form.Label>
            <Col sm={10}>
               <Form.Control type="text" placeholder="Contact number" />
             </Col>
           </Form.Group>
           <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                  Designation
              </Form.Label>
            <Col sm={10}>
               <Form.Control type="text" placeholder="Designation"/>
             </Col>
           </Form.Group>
           <Col>
           <Button  style={{marginLeft:'60%', color:'white', backgroundColor:'#2ECC71', borderColor:'#2ECC71',marginTop:'30px', marginBottom: '20px'}}>Add Doctor
             <FontAwesomeIcon  icon={faCheck} style={{marginLeft:'30px'}}/>
           </Button>
              
           </Col>
       </Form>
       </Card.Body>
      </Card>
      
      
    </div>
  )
}

export default AddDoctor;

