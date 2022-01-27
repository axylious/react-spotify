const authEndpoint = 'https://accounts.spotify.com/authorize'
const clientID = process.env.REACT_APP_SPOTIFY_CLIENT
const redirectURI = process.env.REACT_APP_SPOTIFY_REDIRECT

const scopes = [
   'user-read-currently-playing',
   'user-read-recently-played',
   'user-read-playback-state',
   'user-top-read',
   'user-modify-playback-state',
   'user-follow-read',
   'playlist-read-private',
]

export const handleLogin = () => {
   window.location = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`
   
}

export const getParams = (hash) => {
   const afterHash = hash.substring(1)
   const splitHash = afterHash.split('&')
   const splitUp = splitHash.reduce((accumulator, currentValue) => {
     const [key, value] = currentValue.split('=')
     accumulator[key] = value
     return accumulator
   }, {})
   return splitUp
}

export const handleLogout = () => {
   sessionStorage.clear()
}