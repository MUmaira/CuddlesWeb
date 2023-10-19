import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationArrow, faPhone} from '@fortawesome/free-solid-svg-icons';

const EmergencyForm = () => {
  return (
    <div>
      <Card style={{marginRight:"50px",marginTop:"20px",marginLeft:"500px",marginBottom:"10px",width:"40%", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',background:"tranparent",zIndex:"1", borderColor:'#FF9494'}}>
        <Card.Text style={{marginTop:'10px', fontWeight:'bold'}}>Patient Information</Card.Text>
        <Card.Body style={{marginTop:"10px"}}>
        <Form>
         <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Name 
            </Form.Label>
            <Col sm={10}>
               <Form.Control type="text" placeholder="patient name" />
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
                  Details
              </Form.Label>
            <Col sm={10}>
               <Form.Control as="textarea" rows={5} placeholder="Emergency Details" />
             </Col>
           </Form.Group>
           <Col>
           <Button style={{marginRight:'135px', backgroundColor:'white', color:'#9F678C',  borderColor:'#9F678C',marginTop:'30px'}}>View Location
           <FontAwesomeIcon icon={faLocationArrow} style={{marginLeft:'10px'}} />
           </Button>
           <Button  style={{marginLeft:'80px', color:'white', backgroundColor:'#E88B6B', borderColor:'#E88B6B',marginTop:'30px'}}>Contact Patient
             <FontAwesomeIcon  icon={faPhone} style={{marginLeft:'30px'}}/>
           </Button>
              <Row>
                 <Col>
                 <Button  style={{marginLeft:'368px', marginTop:'20px', color:'white', backgroundColor:'#2A8144', borderColor:'#2A8144', marginBottom:'30px'}}>Contact Doctor
                    <FontAwesomeIcon icon={faPhone} style={{marginLeft:'30px'}}/>
                 </Button>
                 </Col>
              </Row>
           </Col>
       </Form>
       </Card.Body>
      </Card>
      
      
    </div>
  )
}

export default EmergencyForm

