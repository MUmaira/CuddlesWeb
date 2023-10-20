import React from 'react'
import '../styles/Insights.css'
import StatCard from '../components/InsightCard'
import InsightCard from '../components/InsightCard'
import Row from 'react-bootstrap/esm/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import Col from 'react-bootstrap/esm/Col'

const Insights = () => {
  return (
    <div>
       
          <Row>
          <h2 className='title'> Patient Insights</h2>    
          <Dropdown style={{marginLeft: '25%'}}>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: '#9f678c', borderColor: '#9f678c' }}>
                Select Patient Mood
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Depressed</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Happy</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Cheerful</Dropdown.Item>
              </Dropdown.Menu>
         </Dropdown> 
          </Row>    
    
        <InsightCard/>
    </div>
  )
}

export default Insights 
