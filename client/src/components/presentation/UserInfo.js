import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router-dom';
import PlanetSerch from '../../utils/PlanetSearch';

//const users_ = "http://localhost:5000/city/cities";

const _users = [
    { _id: '1', username: 'Chocolate' },
    { _id: '2', username: 'Strawberry' },
    { _id: '3', username: 'Vanilla' }
];

// const city = [
//     { _id: '1', CityName: 'Chocolate' },
//     { _id: '2', CityName: 'Strawberry' },
//     { _id: '3', CityName: 'Vanilla' }
// ];
//let user = [];

class UserInfo extends Component {

    constructor() {
        super();

        this.state = {
            details: {

            }
        }
    }
    componentDidMount() {

        // let initialUsers = [];
        // fetch("http://localhost:5000/userInfo")
        //     .then(response => {
        //         return response.json()
        //     }).then(data => {
        //         initialUsers = data.results.map((users) => {
        //             return users
        //         });
        //         console.log(users);

        //     });
    }

    updateDetails(event) {
        let updateDetails = Object.assign({}, this.state.details);

        alert(event.target.id + " : " + event.target.value)

        updateDetails[event.target.id] = event.target.value;

        console.log(updateDetails);
        this.state({
            details: updateDetails
        });
    }

    userinfo() {
        //this.props.dispatch(submitUserInfo(this.state.details));
    }

    render() {


        return (
            <div>
                <h3>User Information</h3>
                User <select onChange={this.updateDetails.bind(this)} id="userId"  >
                    {_users.map(item => (
                        <option key={item.value} value={item.value}>
                            {item.username}
                        </option>
                    ))}
                </select><br />
                Username <input onChange={this.updateDetails.bind(this)} id="firstName" type="text" placeholder="Firstname" />
                <br />
                Lastname <input onChange={this.updateDetails.bind(this)} id="lastName" type="text" placeholder="Lastname" />
                <br />
                Occupation <input onChange={this.updateDetails.bind(this)} id="occupation" type="text" placeholder="Occupation" />
                <br />
                Address <input onChange={this.updateDetails.bind(this)} id="address" type="text" placeholder="Address" />
                <br />
                City <select >
                </select>
                <br />
                PinCode <input onChange={this.updateDetails.bind(this)} id="pinCode" type="text" placeholder="pinCode" />
                <br />
                    <PlanetSerch onChange={this.updateDetails.bind(this)} id="" />
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(UserInfo);

