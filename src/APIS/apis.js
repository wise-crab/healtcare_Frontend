// server Domain
const serverIP = `http://localhost:3000`;

//Users
const getUsersList = `https://data-mock-278118.wl.r.appspot.com/api/users`;
const getUserByID = `https://data-mock-278118.wl.r.appspot.com/api/users/ID`;

//Exams
const examsList = `https://data-mock-278118.wl.r.appspot.com/api/exams`;
const getExamByID = `https://data-mock-278118.wl.r.appspot.com/api/exams/ID`;
const examsByPatientURL = `${serverIP}/types-exams/`;

const patientsList = `${serverIP}/users-rol?rol=patient`;
const loginURL = `${serverIP}/login`;
const listUsers = `${serverIP}/users`;
const getUser = `${serverIP}/users/user?document=`;
const createUser = listUsers;
const updateUser = `${serverIP}/users/`;
const csvUpload = `${serverIP}/users-csv`;

module.exports = {
  getUsersList,
  getUserByID,
  examsList,
  getExamByID,
  patientsList,
  loginURL,
  getUser,
  createUser,
  updateUser,
  csvUpload,
  examsByPatientURL,
};
