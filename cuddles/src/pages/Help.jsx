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

