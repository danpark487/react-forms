import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Songs from './components/Songs';
import FilterableArtistsContainer from './containers/FilterableArtistsContainer';
import NewPlaylist from './components/NewPlaylist';
import NewPlaylistContainer from './containers/NewPlaylistContainer';
import SinglePlaylist from './components/SinglePlaylist';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
      <Route path="/albums" component={Albums} />
      <Route path="/albums/:albumId" component={Album} />
      <Route path="/artists" component={FilterableArtistsContainer} />
      <Route path="/artists/:artistId" component={Artist}>
        <Route path="albums" component={Albums} />
        <Route path="songs" component={Songs} />
      </Route>
      {/*<Route path="/playlists/:playlistId" component={SinglePlaylist} />*/}
      <Route path="/playlists" component={NewPlaylistContainer}>
        <Route path="new" component={NewPlaylist} />
        <Route path=":playlistId" component={SinglePlaylist} />
      </Route>
      <IndexRedirect to="/albums" />
    </Route>
  </Router>,
  document.getElementById('app')
);
