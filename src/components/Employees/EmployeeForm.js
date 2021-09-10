import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";


export const EmployeeForm = () => {
    const [newEmployee, setNewEmployee] = useState([])

    const history = useHistory()
    
    const submitEmployee = (event) => {
        event.preventDefault()

        const hiredEmployee = {
            id: newEmployee.id,
            name: newEmployee.name,
            location: newEmployee.location,
            manager: newEmployee.manager,
            fullTime: newEmployee.fullTime,
            hourlyRate: newEmployee.hourlyRate
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(hiredEmployee)
        }
        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }
    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    setNewEmployee(employeeArray)
                })
        },
        []
    )

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="employee name"
                        onChange={
                            (event) => {
                                const copyOfEmployee = { ...newEmployee }
                                copyOfEmployee.name = event.target.value
                                setNewEmployee(copyOfEmployee)
                            }
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="employee location"
                        onChange={
                            (event) => {
                                const copyOfEmployee = { ...newEmployee }
                                copyOfEmployee.location = event.target.value
                                setNewEmployee(copyOfEmployee)
                            }
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="manager">Manager</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Yes/No"
                        onChange={
                            (event) => {
                                const copyOfEmployee = { ...newEmployee }
                                copyOfEmployee.manager = event.target.value
                                setNewEmployee(copyOfEmployee)
                            }
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rate">Hourly Rate</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Rate"
                        onChange={
                            (event) => {
                                const copyOfEmployee = { ...newEmployee }
                                copyOfEmployee.rate = event.target.value
                                setNewEmployee(copyOfEmployee)
                            }
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="full time">Full Time</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Yes/No"
                        onChange={
                            (event) => {
                                const copyOfEmployee = { ...newEmployee }
                                copyOfEmployee.fullTime = event.target.value
                                setNewEmployee(copyOfEmployee)
                            }
                        }
                    />
                </div>
            </fieldset>
            <button onClick={submitEmployee} className="btn btn-primary">
                Submit Employee
            </button>
        </form>
    )
}