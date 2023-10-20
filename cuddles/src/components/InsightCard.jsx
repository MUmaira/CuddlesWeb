import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faStethoscope, faWarning, faCircle, faPhone } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'

const InsightCard = () => {
  return (
    <div style={{display:'flex', marginLeft:'185px', marginTop:'30px'}}>
     <Card  style={{ width: '30rem',marginLeft:"130px",marginTop:"10px",boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',background:"transparent",overflow:"hidden",zIndex:"2" }}>
      <Card.Body style={{textAlign: 'left', marginLeft: '1%'}} >
        <FontAwesomeIcon icon={faCircle} style={{color:'#FF0000', marginLeft: '95%'}} />     
        <Card.Title style={{color:'#666666', fontSize: '15px'}}>
            Patient Name :
        </Card.Title>
        <Card.Title style={{color:'#666666', fontSize: '15px'}}>
            Mood :
        </Card.Title>
        <Card.Title style={{color:'#666666', fontSize: '15px'}}>
            Symptoms :
        </Card.Title>  
        <Card.Title style={{color:'#666666', fontSize: '15px'}}>
            Streak :
        </Card.Title>   
        <Button  style={{marginTop:'20px', color:'white', backgroundColor:'#E88B6B', borderColor:'#E88B6B', marginBottom:'15px'}}>Contact Patient
                    <FontAwesomeIcon icon={faPhone} style={{marginLeft:'30px'}}/>
        </Button>        
      </Card.Body>
    </Card>     
    </div>
  )
}

export default InsightCard
