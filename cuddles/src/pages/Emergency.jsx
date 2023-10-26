import React from 'react'
import EmergencyForm from '../components/EmergencyForm'
import StatCard from '../components/StatCard'
import PatientList from '../components/PatientList'
import { db, doc, getDoc, getDocs, collection} from '../config/firebase'; 
import { useState, useEffect } from 'react';


const Emergency = () => {


  const [emergencies, setEmergencies] = useState([]);

  // async function fetchEmergencyData(emergencyId) {
  //   const emergencyRef = doc(db, 'emergencies', emergencyId);
  //   const emergencySnapshot = await getDoc(emergencyRef);

  //   if (emergencySnapshot.exists()) {
  //     return emergencySnapshot.data();
  //   } else {
  //     return null;
  //   }
  // }

  async function fetchAllEmergencies() {
    const emergenciesCollection = collection(db, 'emergencies');
    const emergenciesSnapshot = await getDocs(emergenciesCollection);
    const emergencies = [];
  
    emergenciesSnapshot.forEach((doc) => {
      emergencies.push({ id: doc.id, ...doc.data() });
    });
  
    return emergencies;
  }

  useEffect(() => {
    fetchAllEmergencies()
      .then((data) => {
        setEmergencies(data);
      })
      .catch((error) => {
        console.error('Error fetching emergencies: ', error);
      });
  }, []);

  return (
    <div>
      <div>
        <StatCard />
      </div>
      <div>
        <PatientList />
      </div>
      {emergencies.map((emergency) => (
        <EmergencyForm key={emergency.id} emergencyData={emergency} />
      ))}
    </div>
  );

}

export default Emergency
