import React, { Component } from "react";
import Card from "./Card";
import API from "../utils/API";

class CardHolder extends Component {
    state = {
        result: [],
        employeeDB: [],
        search: "",
    }

    componentDidMount = () =>{
        API.search()
        .then(res => {
            console.log(res);
            let employees = res.data.results;
            let list = employees.map(employee => (
                { 
                    firstName: employee.name.first,
                    lastName: employee.name.last,
                    email: employee.email,
                    phone: employee.phone,
                    picture: employee.picture.thumbnail
                }
            ))
            console.log(list)
            this.setState ({
                result : list,
                employeeDB: list,
            })
        })

    }

    handleSearch = (event) => {
        let searchEmployee = event.target.value;
        this.setState({
            search: searchEmployee
        })
    }

    getResults = (event) => {
        event.preventDefault();
        let employeeData = this.state.employeeDB;
        let employeeArr = []
        for (let i=0; i < employeeData.length; i++) {
            if(employeeData[i].firstName == this.state.search ||
                employeeData[i].lastName == this.state.search) {
                    employeeArr.push(employeeData[i])
                }
        }
        console.log(employeeArr);
        this.setState({ result : employeeArr})
    }

    render() {
        return (
            <div className = "container">
                <form>
                    <input
                     name="searchName"
                      value={this.state.search}
                      onChange= {this.handleSearch} /> 
                    <button onClick={this.getResults}> Search Employee</button>
                </form>
                {this.state.result.map((employee, key) => 
                 < Card 
                 firstName={employee.firstName}
                 lastName={employee.lastName}
                 email={employee.email}
                 phone={employee.phone}
                 picture={employee.picture}
                 key={key}
                 /> )}

            </div>  

        )
    }

}
export default CardHolder;