import React, { Component } from "react";
import EmployeeService from "../services/employeeService";

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //step 2
      id: this.props.match.params.id,
      //assign values
      firstName: "",
      lastName: "",
      emailId: "",
    };

    //bind event hander in constructor
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
  }

  //step 3
  componentDidMount() {
    //load the details

    //step 4
    if (this.state.id === '_add') {
      return;
    } else {
      EmployeeService.getEmployeeById(this.state.id).then((res) => {
        let employee = res.data;
        this.setState({
          firstName: employee.firstName,
          lastName: employee.lastName,
          emailId: employee.emailId,
        });
      });
    }
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log("employee=>" + JSON.stringify(employee));

    //step 5
    if (this.state.id === '_add') {
      //create an employee
      EmployeeService.createEmployee(employee).then((res) => {
        this.props.history.push("/employees");
      });
    } else {
      //step 6
      //update an employee and view list
      EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
        this.props.history.push("/employees");
      });
    }
  };

  cancel() {
    this.props.history.push("/employees");
  }

  //step 9
  getTitle() {
    if (this.state.id === '_add') {
      return <h3 className="text-center">Add Employee</h3>;
    } else {
      return <h3 className="text-center">Update Employee</h3>;
    }
  }

  //step 10
  render() {
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {/* <h3 className="text-center">Add Employee</h3> */}
            
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Email Address: </label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <br />
                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployeeComponent;
