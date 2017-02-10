import React from 'react';
import axios from 'axios';
import {hashHistory} from 'react-router';

import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentInput: '',
            currentSelectedSong: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSongSelect = this.handleSongSelect.bind(this);
    }

    handleSubmit(evt) {
        const newPlaylist = this.props.createNewPlaylist(this.state.currentInput);
        console.log("we are handling submission of new playlist")
        newPlaylist.then((playlist) => {
            const path = `/playlists/${playlist.id}`;
            hashHistory.push(path);
        });
        this.setState({currentInput: ''});
        evt.preventDefault();
    }

    handleChange(evt) {
        const value = evt.target.value;
        const inputLength = value.length;
        if (inputLength > 15 || inputLength < 1) {
            this.showWarning = true;
        } else {
            this.showWarning = false;
        }
        this.setState({currentInput: value});
    }

    handleSelect(evt) {
        evt.preventDefault();
        console.log("button clicked");
        const currentPlaylistId = this.props.selectedPlaylist.id;
        console.log("we are handling submit", currentPlaylistId)
        this.props.addNewSong(currentPlaylistId, this.state.currentSelectedSong);
        console.log(this.props.selectedPlaylist.songs);
    }

    handleSongSelect(evt) {
        const value = evt.target.value;
        console.log("we got the data from options", evt)
        this.setState({
            currentSelectedSong: value
        });
    }

    render() {
        const props = Object.assign({}, this.state, this.props, {
            handleSelect: this.handleSelect,
            handleSongSelect: this.handleSongSelect,
            inputValue: this.state.currentInput,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
            showWarning: this.showWarning
        });

        return (
            <div>
                {
                    this.props.children && React.cloneElement(this.props.children, props)
                }
                {/*<NewPlaylist
                    inputValue={this.state.currentInput}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    showWarning={this.showWarning}
                />*/}
            </div>
        );
    }
}
