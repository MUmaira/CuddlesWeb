import '../styles/Insights.css'
import StatCard from '../components/InsightCard'
import InsightCard from '../components/InsightCard'
import Row from 'react-bootstrap/esm/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import Col from 'react-bootstrap/esm/Col'
import React, {useEffect, useState} from 'react'
import { db, collection, query, getDocs, where } from '../config/firebase';

const Insights = () => {

  const [insightData, setInsightData] = useState([]);
  const [userdata, setUserdata] = useState([]);

  // Create a function to fetch user data and their dailyInsights
  const fetchInsights = async () => {
    const usersCollection = collection(db, 'users'); // Replace 'users' with your Firestore collection name
    const usersQuery = query(usersCollection);

    try {
      const snapshot = await getDocs(usersQuery);

      const insightArray = [];

      snapshot.forEach((doc) => {
        // Process the data from Firestore
        const userData = doc.data();
        const { dailyInsights } = userData;

        // Map over the user's dailyInsights and add them to the array
        if (dailyInsights && dailyInsights.length > 0) {
          //insightArray.push(...dailyInsights);
          dailyInsights.forEach((insight) => {
            insightArray.push({
              user: userData, // User data
              insight: insight, // Daily insight data
            });
          });
        }
      });

      setInsightData(insightArray);

    } catch (error) {
      console.error('Error fetching insights:', error);
    }
  };

  useEffect(() => {
    // Fetch insight details when the component mounts
    fetchInsights();
  }, []);


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
          {insightData.map((data, index) => (
        <InsightCard key={index} userData={data.user} insightData={data.insight} />
         ))}
        
    </div>
  )
}

export default Insights 
