const authEndpoint = 'https://accounts.spotify.com/authorize'
const clientID = process.env.REACT_APP_SPOTIFY_CLIENT
const redirectURI = process.env.REACT_APP_SPOTIFY_REDIRECT

const scopes = [
   'user-read-playback-state',
   'user-read-private',
   'user-follow-read',
   'user-library-read',
   'playlist-modify-private',
   'playlist-read-collaborative',
   'user-read-email',
   'playlist-read-private',
   'user-top-read',
   'playlist-modify-public',
   'user-read-recently-played',
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
   window.location.replace('')
   return splitUp
}

export const handleLogout = () => {
   sessionStorage.clear()
   window.location.reload()
}