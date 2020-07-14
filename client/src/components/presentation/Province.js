import React, { Components } from 'react';
import {submitProvince} from '../../actions/userInfoAction'
import { connect } from 'react-redux'

class Province extends Components {
    constructor() {
        super();

        this.state = {
            details: {

            }
        }
    }

    updateDetails(event) {
        let updateDetails = Object.assign({}, this.state.details);

        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }

    submit() {
        this.props.dispatch(submitProvince(this.state.details));
    }

    render() {
        return (

            <div>
                <h3>Province</h3>
                 CountryName <input onChange={this.updateDetails.bind(this)} id="countryName" type="text" placeholder="CountryName" />
                 Province <input onChange={this.updateDetails.bind(this)} id="provinceName" type="text" placeholder="ProvinceName" />
            </div>

        )
    }
}

const mapStatetoProps=state=>{
    return{

    }
}

export default connect(mapStatetoProps)(Province);