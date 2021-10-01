const authEndpoint = 'https://accounts.spotify.com/authorize'
const redirectUri = 'http://localhost:3000';
const clientId = '93b9fc283f774efa81681d516cc5b90c';

const scopes = [
   'user-read-currently-playing',
   'user-read-recently-played',
   'user-read-playback-state',
   'user-top-read',
   'user-modify-playback-state',
   'user-follow-read',
   'playlist-read-private',
];

export const handleLogin = () => {
   window.location = `${authEndpoint}?client_id=${clientId}&redirect-uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`
}