import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
//server port 8080

class EmployeeService {
  //get method
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  //create employee
  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }

  //get by id
  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  }

  //update employee
  updateEmployee(employee, employeeId) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + employeeId, employee);
  }

  //delete employee
  deleteEmployee(employeeId){
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  }
}

export default new EmployeeService();
//export an object from the class
