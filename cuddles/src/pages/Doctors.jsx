import React, {useEffect, useState} from 'react'
import '../styles/Insights.css'
import Row from 'react-bootstrap/esm/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import Col from 'react-bootstrap/esm/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faStethoscope, faWarning, faCircle, faPhone, faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'
import DoctorCard from '../components/DoctorCard'
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase'; 
import { ToastContainer, toast } from "react-toastify";

const Doctors = () => {

  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctorsCollection = collection(db, 'doctors');
        const querySnapshot = await getDocs(doctorsCollection);
        const doctorData = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          doctorData.push({
            id: doc.id,
            ...data,
          });
        });

        setDoctors(doctorData);
      } catch (error) {
        console.error('Error fetching doctors:', error);
        toast.error('Error fetching doctor information');
      }
    };

    fetchDoctors();
  }, []);

  const handleDeleteDoctor = (doctorId) => {
    // Remove the deleted doctor from the list
    setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor.id !== doctorId));
  };

 
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

         {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} onDelete={handleDeleteDoctor}/>
      ))}
    <ToastContainer/>
    </div>
    
  )
}

export default Doctors;



