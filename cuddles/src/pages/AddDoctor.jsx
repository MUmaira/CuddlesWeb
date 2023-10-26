import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { db,  storage } from '../config/firebase'; // Import your Firebase configuration
import { ToastContainer, toast } from "react-toastify";

const AddDoctor = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [designation, setDesignation] = useState('');
  const [availableHrs, setAvailableHrs] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // For displaying the image preview
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);

    // Create a preview of the selected image
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  const addDoctorInformation = async () => {
    const newDoctor = {
      firstName,
      lastName,
      email,
      address,
      contactNumber,
      designation,
      availableHrs,
    };

    try {
      const doctorsCollection = collection(db, 'doctors');
      const docRef = await addDoc(doctorsCollection, {
        ...newDoctor,
        timestamp: serverTimestamp(),
      });

      if (image) {
        const storageRef = ref(storage, `doctorImages/${docRef.id}/${image.name}`);
        await uploadBytes(storageRef, image);
        const imageUrl = await getDownloadURL(storageRef);
        await updateDoc(docRef, {
          image: imageUrl,
        });
      }
      toast.success('Doctor added successfully.')
      navigate('/doctors');
    } catch (error) {
      console.error('Error adding doctor:', error);
      toast.error('Error adding doctor information.');
    }
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
            <Form.Group as={Row} className="mb-3" controlId="firstName">
              <Form.Label column sm={2}>
                First Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  style={{textAlign:'center'}}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="lastName">
              <Form.Label column sm={2}>
                Last Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  style={{textAlign:'center'}}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="email">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  style={{textAlign:'center'}}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="address">
              <Form.Label column sm={2}>
                Address
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  value={address}
                  style={{textAlign:'center'}}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="contactNumber">
              <Form.Label column sm={2}>
                Contact Number
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Contact Number"
                  value={contactNumber}
                  style={{textAlign:'center'}}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="designation">
              <Form.Label column sm={2}>
                Designation
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Designation"
                  value={designation}
                  style={{textAlign:'center'}}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="availableHrs">
              <Form.Label column sm={2}>
                Available Hours
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="available hours"
                  value={availableHrs}
                  style={{textAlign:'center'}}
                  onChange={(e) => setAvailableHrs(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="image">
              <Form.Label column sm={2}>
                Image
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
              </Col>
            </Form.Group>

            {/* Display image preview */}
            {imagePreview && (
              <div className="text-center" style={{marginRight: '38%'}}>
                <img src={imagePreview} alt="Image Preview" style={{ maxWidth: '190px', maxHeight: '200px', borderRadius: '10px' }} />
              </div>
            )}

            <Col>
              <Button
                onClick={addDoctorInformation}
                style={{
                  width:'50%',
                  color: 'white',
                  backgroundColor: '#429e7f',
                  borderColor: '#429e7f',
                  marginTop: '30px',
                  marginBottom: '20px',
                  fontWeight:'bold'
                }}
              >
                Add Doctor
                <FontAwesomeIcon icon={faArrowUp} style={{ marginLeft: '30px' }} />
              </Button>
            </Col>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer/>
    </div>
  );
};

export default AddDoctor;
