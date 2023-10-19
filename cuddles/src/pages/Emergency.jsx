import React from 'react'
import EmergencyForm from '../components/EmergencyForm'
import StatCard from '../components/StatCard'
import PatientList from '../components/PatientList'

const Emergency = () => {
  return (
    <div>
      <div>
        <StatCard/>
      </div>
      <div>
        <PatientList/>
      </div>
      <EmergencyForm/>
    </div>
  )
}

export default Emergency
