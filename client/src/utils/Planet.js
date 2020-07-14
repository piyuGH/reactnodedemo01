import React from 'react';

class Planet extends React.Component {
    constructor() {
        super();
    }

    defaultItem = { text: 'Select sport ...' };

    render() {
        let planets = this.props.state.planets;
        let optionItems = planets.map((planet) =>
            <option key={planet.userID}>{planet.firstName} </option>
        );

        return (
            <div>
                <select slected="Choose your option" label="Example label">
                    {optionItems}
                </select>
            </div>
        )
    }
}

export default Planet;
