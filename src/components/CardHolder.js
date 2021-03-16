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

    render() {
        return (
            <div className = "container">
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