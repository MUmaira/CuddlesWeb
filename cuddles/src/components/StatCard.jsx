import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faStethoscope, faWarning } from '@fortawesome/free-solid-svg-icons';

const StatCard = () => {
  return (
    <div style={{display:'flex', marginLeft:'185px', marginTop:'30px'}}>
     <Card  style={{ width: '18rem',marginLeft:"100px",marginTop:"20px",boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',background:"transparent",overflow:"hidden",zIndex:"2" }}>
      <Card.Body>
        <Card.Title style={{color:'#666666'}}>
            Total Emergency Cases
            <FontAwesomeIcon icon={faStethoscope} style={{marginLeft:"10px", color:'#FF9494'}} />
        </Card.Title>
        <Card.Text style={{fontSize:"55px",fontWeight:"bolder"}}>
              50
        </Card.Text>
      </Card.Body>
    </Card>

    <Card  style={{ width: '18rem',marginLeft:"100px",marginTop:"20px",boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',background:"transparent",overflow:"hidden",zIndex:"1" }}>
      <Card.Body>
        <Card.Title style={{color:'#666666'}}>
            Case Inquiries
            <FontAwesomeIcon icon={faWarning} style={{marginLeft:"10px", color:'#EDBE17'}} />
        </Card.Title>
        <Card.Text style={{fontSize:"55px",fontWeight:"bolder"}}>
              15
        </Card.Text>
      </Card.Body>
    </Card>

    <Card  style={{ width: '18rem',marginLeft:"100px",marginTop:"20px",boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',background:"transparent",overflow:"hidden",zIndex:"1" }}>
      <Card.Body>
        <Card.Title style={{color:'#666666'}}>
            Resolved Cases
            <FontAwesomeIcon icon={faSquareCheck} style={{marginLeft:"10px", color:'#2A8144'}} />
        </Card.Title>
        <Card.Text style={{fontSize:"55px",fontWeight:"bolder"}}>
              30
        </Card.Text>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default StatCard
