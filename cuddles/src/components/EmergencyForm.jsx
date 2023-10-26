import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationArrow, faPhone} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Emergency from '../pages/Emergency';


const EmergencyForm = ({emergencyData}) => {

  const navigate = useNavigate();
  const timestamp = new Date(
    emergencyData.timestamp.seconds * 1000 + emergencyData.timestamp.nanoseconds / 1000000
  );

  return (
    <div>
      <Card style={{marginRight:"50px",marginTop:"20px",marginLeft:"500px",marginBottom:"10px",width:"40%", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',background:"tranparent",zIndex:"1", borderColor:'#FF9494'}}>
        <Card.Text style={{marginTop:'10px', fontWeight:'bold'}}>Patient Information</Card.Text>
        <Card.Body style={{marginTop:"10px"}}>
        <Form>
         <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              Patient Name : 
            </Form.Label>
            <Col sm={9}>
               <Form.Text> {emergencyData.userName} </Form.Text>
             </Col>
         </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Form.Label column sm={3}>
                  Contact Number :
              </Form.Label>
            <Col sm={9}>
            <Form.Text> {emergencyData.phoneNumber} </Form.Text>
             </Col>
           </Form.Group>

           <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Form.Label column sm={3}>
                 Symptoms :
              </Form.Label>
            <Col sm={9}>
            <Form.Text> {emergencyData.selectedReasons.join(', ')} </Form.Text>
             </Col>
           </Form.Group>

           <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Form.Label column sm={3}>
                 Additional Details :
              </Form.Label>
            <Col sm={9}>
            <Form.Text> {emergencyData.additionalNotes} </Form.Text>
             </Col>
           </Form.Group>

           <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Form.Label column sm={3}>
                 Recorded Time :
              </Form.Label>
            <Col sm={9}>
            <Form.Text>{timestamp.toLocaleString()}</Form.Text>
             </Col>
           </Form.Group>
           <Col>
           <Button onClick={()=> navigate(`/emergency/123`)} style={{marginRight:'135px', backgroundColor:'white', color:'#9F678C',  borderColor:'#9F678C',marginTop:'30px'}}>View Location
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

