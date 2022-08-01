import React, { Component } from "react";
import EmployeeService from "../services/employeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };

    //bind event handler to Add employee
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
  }

  //service call from employeeService
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  //delete employee method
  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }

  //add employee method
  addEmployee() {
    //step 7
    this.props.history.push("/add-employee/_add");
  }

  editEmployee(id) {
    //step 8
    this.props.history.push(`/add-employee/${id}`);
  }

  viewEmployee(id){
    this.props.history.push(`/view-employee/${id}`);
  }

  render() {
    return (
      <div>
        <br />
        <h2 className="text-center">Employees List</h2>
        <div>
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <br />
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee EmailID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  {/* these should be taken from the original backend model entity */}
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button
                      onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-danger"
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.viewEmployee(employee.id)}
                      className="btn btn-info"
                      style={{ marginLeft: "10px" }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
