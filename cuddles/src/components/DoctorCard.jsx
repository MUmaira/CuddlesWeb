import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faStethoscope, faWarning, faCircle, faPhone, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase'; 
import { ToastContainer, toast } from "react-toastify";

const DoctorCard = ({ doctor, onDelete }) => {

  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate(`/updateDoctor/${doctor.id}`); // Navigate to the UpdateDoctor page
  };

  const handleDeleteClick = async () => {
    // Delete doctor information from the database
    try {
      const doctorRef = doc(db, 'doctors', doctor.id);
      await deleteDoc(doctorRef);
      // After successful deletion, you can update your local state or perform any other necessary actions.
      toast.success('Doctor information deleted successfully')
      console.log('Doctor information deleted successfully');
      // Call the onDelete function to remove the doctor from the list
      onDelete(doctor.id);
       // After successful deletion, reload the page
       //window.location.reload();
    } catch (error) {
      toast.error('Doctor information deletion failed')
      console.error('Error deleting doctor information:', error);
    }
  };

  return (
    <div style={{ display: 'flex', marginLeft: '15%', marginTop: '30px' }}>
      <Card style={{ width: '35rem', marginLeft: '200px', marginTop: '0px', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)', background: 'transparent', overflow: 'hidden', zIndex: '2' }}>
        <Card.Body style={{ display: 'flex' }}>
          <div style={{ width: '25%'}}>
            <Card.Img variant="left" src={doctor.image} style={{ width: '100%', height: '100%', borderRadius: '6px'}} />
          </div>
          <div style={{ flex: 2, paddingLeft: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'left'}}>
          <FontAwesomeIcon icon={faCircle} style={{color:'#00e400', marginLeft: '95%'}} />  
            <Card.Title style={{ color: '#666666', fontSize: '20px', marginBottom: '10px', marginRight: '40%', textAlign:'left'}}>
             Dr. {doctor.firstName} {doctor.lastName}
            </Card.Title>
            <Card.Text style={{ color: '#666666', fontSize: '16px', marginBottom: '10px', marginRight: '50%', textAlign:'left'}}>
             Designation:  {doctor.designation}
            </Card.Text>
            <Card.Text style={{ color: '#666666', fontSize: '16px', marginBottom: '15px', marginRight: '20%', textAlign:"left"}}>
             Available Hours: {doctor.availableHrs}
            </Card.Text>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Button 
              onClick={handleUpdateClick}
              style={{marginLeft: '18%',maxWidth:'150px',color: 'white', backgroundColor: '#5DADE2', borderColor: '#5DADE2', fontSize: '12px', width: '48%' }}>
              Update information
              <FontAwesomeIcon icon={faPen} style={{ marginLeft: '7px' }} />
            </Button>
            <Button 
             onClick={handleDeleteClick}
            style={{ maxWidth:'150px', color: 'white', backgroundColor: '#E88B6B', borderColor: '#E88B6B', fontSize: '12px', width: '48%' }}>
              Delete information
              <FontAwesomeIcon icon={faTrash} style={{ marginLeft: '7px' }} />
            </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      <ToastContainer/>
    </div>
  );
};

export default DoctorCard;
