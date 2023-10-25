export default class Doctor {
    constructor(
      firstName = '',
      lastName = '',
      email = '',
      address = '',
      contactNumber = '',
      designation ='',
      image = '', 
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.address = address;
      this.contactNumber = contactNumber;
      this.designation = designation;
      this.image = image;
    }
  }