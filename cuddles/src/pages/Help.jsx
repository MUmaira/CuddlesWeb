import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { db, doc, getDoc, updateDoc } from './firebaseConfig'; // Import your Firebase configuration

const UpdateDoctor = ({ id }) => {
  const [doctor, setDoctor] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    contactNumber: '',
    designation: '',
    image: null, // Updated to include an image field
  });
  const [currentImage, setCurrentImage] = useState(null);
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
    setDoctor({ ...doctor, image: imageFile });
  };

  const handleUpdateDoctor = async () => {
    // Update doctor details in Firestore
    const doctorRef = doc(db, 'doctors', id);
    await updateDoc(doctorRef, doctor);

    navigate('/doctors'); // Navigate back to the doctors list
  };

  return (
    <div>
      <Form>
        <Form.Group as={Col} controlId="formImage">
          <Form.Label>Doctor Image</Form.Label>
          {currentImage && (
            <Image src={currentImage} alt="Current Doctor Image" fluid />
          )}
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={doctor.firstName}
            onChange={(e) => setDoctor({ ...doctor, firstName: e.target.value })}
          />
        </Form.Group>

        {/* Add similar Form.Group components for other fields (lastName, email, address, contactNumber, designation) */}

        <Button variant="primary" onClick={handleUpdateDoctor}>
          Update Doctor Information
        </Button>
      </Form>
    </div>
  );
};

export default UpdateDoctor;
