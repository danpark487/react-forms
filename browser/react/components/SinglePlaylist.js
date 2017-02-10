import React from 'react';
import Songs from './Songs';

export default class SinglePlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSongValue: ''
        };
    }

    componentDidMount() {
        const playlistId = this.props.routeParams.playlistId;
        const selectPlaylist = this.props.selectPlaylist;
        selectPlaylist(playlistId);
    }

    componentWillReceiveProps(nextProps) {
        const nextPlaylistId = nextProps.routeParams.playlistId;
        const currentPlaylistId = this.props.routeParams.playlistId;
        const selectPlaylist = this.props.selectPlaylist;
        if (nextPlaylistId !== currentPlaylistId) selectPlaylist(nextPlaylistId);
    }

    // handleNewSongSelect(evt) {
    //     const value = evt.target.value;
    //     console.log(evt)
    // }

    render() {
        const playlist = this.props.selectedPlaylist;
        const songs = playlist.songs || [];
        const allSongs = this.props.songs;
        console.log(this.props.handleSongSelect);
        return (
            <div>
                <h3>{playlist.name}</h3>
                <Songs songs={playlist.songs} />
                {playlist.songs && !playlist.songs.length && <small>No songs.</small>}
                <hr />
                <div className="well">
                    <form onSubmit={this.props.handleSelect} className="form-horizontal" noValidate name="songSelect">
                        <fieldset>
                            <legend>Add to Playlist</legend>
                            <div className="form-group">
                                <label htmlFor="song" className="col-xs-2 control-label">Song</label>
                                <div className="col-xs-10">
                                    <select value={this.state.currentSongValue} onChange={this.handleNewSongSelect} className="form-control" name="song">
                                        {
                                            allSongs.map((song) => {
                                                return (<option value={song.id} key={song.id}>{song.name}</option>);
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-10 col-xs-offset-2">
                                    <button type="submit" className="btn btn-success">Add Song</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}
