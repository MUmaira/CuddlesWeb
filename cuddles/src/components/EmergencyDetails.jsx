import React from 'react'
import map from '../assets/map.png'
import '../styles/EmergencyDetail.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAmbulance, faCheck, faWheelchair} from '@fortawesome/free-solid-svg-icons';

const EmergencyDetails = () => {
  return (
    <div>
      <div className='map'>
        <img src={map} alt='map' />
      </div>
      <div className='buttonLayout'>
      <Col style={{marginTop:'220px'}}>
           <Button  style={{marginRight:'135px', backgroundColor:'#E88B6B', color:'white',  borderColor:'#E88B6B',marginTop:'30px'}}> Send Ambulance
           <FontAwesomeIcon icon={faAmbulance} style={{marginLeft:'10px'}} />
           </Button>
           <Button  style={{marginLeft:'80px', color:'white', backgroundColor:'#9F678C', borderColor:'#9F678C',marginTop:'30px'}}>Confirm Arrival
             <FontAwesomeIcon  icon={faWheelchair} style={{marginLeft:'30px'}}/>
           </Button>
              <Row>
                 <Col>
                 <Button  style={{marginLeft:'395px', marginTop:'30px', color:'white', backgroundColor:'#2A8144', borderColor:'#2A8144', marginBottom:'30px'}}> Mark Resolved
                    <FontAwesomeIcon icon={faCheck} style={{marginLeft:'30px'}}/>
                 </Button>
                 </Col>
              </Row>
           </Col>
      </div>
    </div>
  )
}

export default EmergencyDetails
