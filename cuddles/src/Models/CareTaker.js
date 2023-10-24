export default class CareTaker {
  constructor(
    firstName = "",
    lastName = "",
    address = "",
    email = "",
    phoneNumber = "",
    designation = ""
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.designation = designation;
  }
}
