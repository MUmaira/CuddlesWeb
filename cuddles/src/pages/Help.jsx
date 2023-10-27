//daily insight class
export default class DailyInsight {
  constructor(
    day = '',
    insights = { mood: '', kickCount: '', weight: '', bloodPressure: '', pains: [], note: '' }
  ) {
    this.day = day;
    this.insights = insights;
  }
  toFirestoreFormat() {
    return [{
      day: this.day,
      insights: {
        mood: this.insights.mood,
        kickCount: this.insights.kickCount,
        weight: this.insights.weight,
        bloodPressure: this.insights.bloodPressure,
        pains: this.insights.pains,
        note: this.insights.note
      }
    }];
  }
}

//user class
export default class User {
  constructor(
    firstName = '',
    lastName = '',
    email = '',
    phoneNumber = '',
    dueDate = '',
    emergencyContact = '',
    dateOfBirth = '',
    city = '',
    height = '',
    medicalHistory = '',
    dailyInsights = [] 
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.dueDate = dueDate;
    this.emergencyContact = emergencyContact;
    this.dateOfBirth = dateOfBirth;
    this.city = city;
    this.height = height;
    this.medicalHistory = medicalHistory;
    this.dailyInsights = dailyInsights; 
  }

  addDailyInsight(dailyInsight) {
    this.dailyInsights.push(dailyInsight);
  }
}

//date 
const today = new Date().toLocaleDateString('en-GB');

i have a mobile application which allows users to input their daily insights to the application and those daily insights data are stored in a field in the users properties of the database as an array of
 daily insights. this array contains the inputted date and the insights. i have provided the insights class and the user class and also the code line which we use the get the inputted day of the dailyInsights.
 Now i need to fetch those details which are in the firestore database into my react web application. i'm providing the insights and insightCard code segments below. i need to fetch the insight details of the users which are in the fiestore and then display the details
 in the insights cards in the insights section.  

 //insight card code of the web application

 import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faStethoscope, faWarning, faCircle, faPhone, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
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
        <Button  style={{marginTop:'20px', color:'white', backgroundColor:'#E88B6B', borderColor:'#E88B6B', marginBottom:'15px'}}>
            More Information
        <FontAwesomeIcon icon={faCircleInfo} style={{marginLeft:'30px'}}/>
        </Button>        
      </Card.Body>
    </Card>     
    </div>
  )
}

export default InsightCard

//insights section of the web application
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
       
          <Row style={{marginTop: '1%'}}>
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

//firebase comnfiguration file of the web application\


import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, getDocs, getDoc, updateDoc, collection } from "firebase/firestore";
import {
  getAuth,
  initializeAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA_JudvElNsrENi9O0bCZAiwpltyJn3Zo8",
  authDomain: "sample-b8dee.firebaseapp.com",
  databaseURL: "https://sample-b8dee-default-rtdb.firebaseio.com",
  projectId: "sample-b8dee",
  storageBucket: "sample-b8dee.appspot.com",
  messagingSenderId: "967558148369",
  appId: "1:967558148369:web:eeebfaf360af3710ab1cb0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app);

const db = getFirestore(app); // Initialize Firestore

const storage = getStorage(app); //initialize storage

export { auth, db, setDoc, doc, getDocs, storage, getDoc, updateDoc, collection };
