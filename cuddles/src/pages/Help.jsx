const EmergencyForm = ({ emergencyData }) => {
  // ... (existing code)

  return (
    <div>
      <Card style={{/* ... */}}>
        <Card.Text style={{/* ... */}}>Patient Information</Card.Text>
        <Card.Body style={{/* ... */}}>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                userName :
              </Form.Label>
              <Col sm={9}>
                <Form.Text>{emergencyData.userName}</Form.Text>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Form.Label column sm={3}>
                phoneNumber :
              </Form.Label>
              <Col sm={9}>
                <Form.Text>{emergencyData.phoneNumber}</Form.Text>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Form.Label column sm={3}>
                Symptoms :
              </Form.Label>
              <Col sm={9}>
                <Form.Text>{emergencyData.selectedReasons.join(', ')}</Form.Text>
              </Col>
            </Form.Group>

            {/* ... (other fields) */}
          </Form>
          <Col>
            <Button onClick={() => navigate(`/emergency/${emergencyData.id}`)} style={{/* ... */}}>
              View Location
              <FontAwesomeIcon icon={faLocationArrow} style={{/* ... */}} />
            </Button>
            <Button style={{/* ... */}}>Contact Patient</Button>
            <Row>
              <Col>
                <Button style={{/* ... */}}>Contact Doctor</Button>
              </Col>
            </Row>
          </Col>
        </Card.Body>
      </Card>
    </div>
  );
};
