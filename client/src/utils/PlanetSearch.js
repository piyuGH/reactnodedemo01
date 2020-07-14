
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom';
import Planet from './Planet';

class PlanetSearch extends Component {
    constructor() {
        super();
        this.state = {
            planets: [],
        };
    }
    async componentDidMount() {

        const response = await fetch("http://localhost:5000/userInfo");
        if (response) {
            const json = await response.json();
            //console.log(json.data);
            let initialPlanets = await json.data.map((planet) => {
                return planet
            })
            console.log(initialPlanets);
            this.setState({ planets: initialPlanets });
        }

        //   let initialPlanets =  [];
        //   await fetch('http://localhost:5000/news')
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(data => {
        //         initialPlanets = data.map((planet) => {
        //             return planet
        //         });
        //         console.log(initialPlanets);
        //         this.setState({
        //             planets: initialPlanets,
        //         });
        //     });
    }

    render() {
        return (
            <Planet state={this.state} />
        );
    }
}

export default PlanetSearch;


//ReactDOM.render(<PlanetSearch />, document.getElementById('react-search'));
