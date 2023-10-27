import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { db, doc, getDoc, updateDoc } from '../config/firebase'; // Import your Firebase configuration
import { useParams, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';

const InsightDetails = () => {

    const { userId } = useParams();
    const location = useLocation();
    const { userData, insightData } = location.state;


  return (
    <div style={{ marginTop: '2%' }}>
     <Card
        style={{
          marginRight: '50px',
          marginTop: '20px',
          marginLeft: '500px',
          marginBottom: '10px',
          width: '45%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          background: 'transparent',
          zIndex: '1',
          borderColor: '#A9A9A9',
        }}
      >
        <Card.Text style={{ marginTop: '10px', fontSize: '25px', fontWeight: 'bold', color: '#85929E' }}>
          Patient Daily Insight on {insightData.day} 
        </Card.Text>
        <Card.Body style={{ marginTop: '10px' }}>
      <Form>
        <Form.Group as={Row}  className="mb-3" controlId="formFirstName">
          <Form.Label column sm={2}>Patient Name</Form.Label>
          <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Patient Name"
            value={`${userData.firstName} ${userData.lastName}`} 
          />
          </Col>
        </Form.Group>

        <Form.Group as={Row}  className="mb-3" controlId="formLastName">
          <Form.Label column sm={2}>Due date</Form.Label>
          <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Due date"
            value= {userData.dueDate}
           
          />
          </Col>
        </Form.Group>

        <Form.Group as={Row}  className="mb-3" controlId="formAddress">
          <Form.Label column sm={2}>Contact number</Form.Label>
          <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Contact number"
            value={userData.phoneNumber}
            
          />
          </Col>
        </Form.Group>

        <Form.Group as={Row}  className="mb-3" controlId="formContactNumber">
          <Form.Label column sm={2}>Mood</Form.Label>
          <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Mood"
            value={insightData.insights.mood}
           
          />
          </Col>
        </Form.Group>

        <Form.Group as={Row}  className="mb-3" controlId="formDesignation">
          <Form.Label column sm={2}>Blood Pressure</Form.Label>
          <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Blood Pressure"
            value={`${insightData.insights.bloodPressure} mm Hg`}
          />
          </Col>
        </Form.Group>

        <Form.Group as={Row}  className="mb-3" controlId="formAvailableHrs">
          <Form.Label column sm={2}>Pain Symptoms</Form.Label>
          <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Pain Symptoms"
            value={insightData.insights.pains.join(', ')}
           
          />
          </Col>
        </Form.Group>

        <Form.Group as={Row}  className="mb-3" controlId="formAvailableHrs">
          <Form.Label column sm={2}>Weight</Form.Label>
          <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Weight"
            value={`${insightData.insights.weight} Kg`}
           
          />

    
          </Col>
        </Form.Group>

        <Form.Group as={Row}  className="mb-3" controlId="formEmail">
          <Form.Label column sm={2}>Medical history</Form.Label>
          <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Medical history"
            value={userData.medicalHistory}
           
          />
          </Col>
        </Form.Group>

      </Form>
      </Card.Body>
      </Card>
    </div>
  );
};

export default InsightDetails;
