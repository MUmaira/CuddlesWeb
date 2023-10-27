import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { db, doc, getDoc, updateDoc } from '../config/firebase'; // Import your Firebase configuration
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';

const UpdateDoctor = () => {
const { id } = useParams();
  const [doctor, setDoctor] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    contactNumber: '',
    designation: '',
    availableHrs: '',
    image: null, // Updated to include an image field
  });
  const [currentImage, setCurrentImage] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch doctor details from Firestore
    const fetchDoctor = async () => {
      const doctorRef = doc(db, 'doctors', id);
      const doctorSnapshot = await getDoc(doctorRef);

      if (doctorSnapshot.exists()) {
        const doctorData = doctorSnapshot.data();
        setDoctor(doctorData);
        setCurrentImage(doctorData.image); // Set the current image
      }
    };

    fetchDoctor();
  }, [id]);

  const handleImageChange = (e) => {
    // Handle the selection of a new image
    const imageFile = e.target.files[0];
    //setNewImage(URL.createObjectURL(imageFile));
  };

  const handleUpdateDoctor = async () => {
    // Update doctor details in Firestore
    const doctorRef = doc(db, 'doctors', id);

    // Check if a new image was selected; if not, use the existing image
       if (newImage) {
        setDoctor({ ...doctor, image: newImage });
      }

    await updateDoc(doctorRef, doctor);

    navigate('/doctors'); // Navigate back to the doctors list
  };

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
          Doctor Information
        </Card.Text>
        <Card.Body style={{ marginTop: '10px' }}>
      <Form>
        <Form.Group as={Row}  className="mb-3" controlId="formFirstName">
          <Form.Label column sm={2}>First Name</Form.Label>
          <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={doctor.firstName}
            onChange={(e) => setDoctor({ ...doctor, firstName: e.target.value })}
          />
          </Col>
        </Form.Group>

        <Form.Group as={Row}  className="mb-3" controlId="formLastName">
          <Form.Label column sm={2}>Last Name</Form.Label>
          <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={doctor.lastName}
            onChange={(e) => setDoctor({ ...doctor, lastName: e.target.value })}
          />
          </Col>
        </Form.Group>

        <Form.Group as={Row}  className="mb-3" controlId="formEmail">
          <Form.Label column sm={2}>Email</Form.Label>
          <Col sm={10}>
          <Form.Control
            type="email"
            placeholder="Email"
            value={doctor.email}
            onChange={(e) => setDoctor({ ...doctor, email: e.target.value })}
          />
          </Col>
        </Form.Group>

        <Form.Group as={Row}  className="mb-3" controlId="formAddress">
          <Form.Label column sm={2}>Address</Form.Label>
          <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Address"
            value={doctor.address}
            onChange={(e) => setDoctor({ ...doctor, address: e.target.value })}
          />
          </Col>
        </Form.Group>

        <Form.Group as={Row}  className="mb-3" controlId="formContactNumber">
          <Form.Label column sm={2}>Contact Number</Form.Label>
          <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Contact Number"
            value={doctor.contactNumber}
            onChange={(e) => setDoctor({ ...doctor, contactNumber: e.target.value })}
          />
          </Col>
        </Form.Group>

        <Form.Group as={Row}  className="mb-3" controlId="formDesignation">
          <Form.Label column sm={2}>Designation</Form.Label>
          <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Designation"
            value={doctor.designation}
            onChange={(e) => setDoctor({ ...doctor, designation: e.target.value })}
          />
          </Col>
        </Form.Group>

        <Form.Group as={Row}  className="mb-3" controlId="formAvailableHrs">
          <Form.Label column sm={2}>Available Hours</Form.Label>
          <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Available Hours"
            value={doctor.availableHrs}
            onChange={(e) => setDoctor({ ...doctor, designation: e.target.value })}
          />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formImage">
          <Form.Label column sm={2}>Doctor Image</Form.Label>
          {currentImage && (
            <Image src={currentImage} alt="Current Doctor Image" style={{ maxWidth: '190px', maxHeight: '200px', borderRadius: '15px' }} />
          )}
          <Col sm={10}>
          <Form.Control
            style={{marginTop: '20px'}}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
         </Col>
        </Form.Group>

        <Button  style={{
                  marginLeft: '60%',
                  color: 'white',
                  backgroundColor: '#E67E22',
                  borderColor: '#E67E22',
                  marginTop: '30px',
                  marginBottom: '20px',
                }} onClick={handleUpdateDoctor}>
          Update Doctor Information
        </Button>
      </Form>
      </Card.Body>
      </Card>
    </div>
  );
};

export default UpdateDoctor;
