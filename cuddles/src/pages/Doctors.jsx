import React from 'react'
import '../styles/Insights.css'
import Row from 'react-bootstrap/esm/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import Col from 'react-bootstrap/esm/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faStethoscope, faWarning, faCircle, faPhone, faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'
import DoctorCard from '../components/DoctorCard'
import { useNavigate } from 'react-router-dom';


const Doctors = () => {

  const navigate = useNavigate();

  
  return (
    <div>
       
          <Row style={{marginTop: '1%'}}>
          <h2 className='title'> Doctors List</h2>            
          </Row>  
          <Button  style={{marginTop:'20px',width: '190px', color:'white',padding: '10px', backgroundColor:'#E88B6B', borderColor:'#E88B6B', marginBottom:'15px', marginLeft: '60%'}}
           onClick={()=> navigate(`/addDoctor`)}>
            Add doctor
                    <FontAwesomeIcon icon={faPlus} style={{marginLeft:'30px'}}/>
         </Button> 

        <DoctorCard/>
      
    </div>
    
  )
}

export default Doctors;

