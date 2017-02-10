import React from 'react';
import {Link} from 'react-router';

import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class FilterableArtistsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        const value = evt.target.value;
        this.setState({currentValue: value});
    }

    render() {
        const currentValue = this.state.currentValue;
        const filteredArtists = this.props.artists.filter(artist =>
            artist.name.match(currentValue));
        return (
            <div>
                <FilterInput handleChange={this.handleChange} />
                <Artists artists={filteredArtists} />
            </div>
        );
    }


}
