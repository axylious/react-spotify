import React, {useEffect, useState} from 'react'
import axios from 'axios'

const PLAYLIST_ENDPOINT = 'https://api.spotify.com/v1/me/playlists'

const GetPlaylist = () => {
   const [token, setToken] = useState('')
   const [data, setData] = useState({})

   useEffect(() => {
      if (sessionStorage.getItem('accessToken')) {
         setToken(sessionStorage.getItem('accessToken'))
      }
   }, []);

   const handleGetPlaylists = () => {
      axios.get(PLAYLIST_ENDPOINT, {
         headers: {
            Authorization: 'Bearer ' + token,
         },
      }).then((response) => {
         setData(response.data)
      }).catch((error) => {
         console.log(error)
      })
   }

   handleGetPlaylists()

   return (
      <>
         {data?.items ? data.items.map((item) => <a href={item.href}>{item.name}</a>) : null}
      </>
   )
}

export default GetPlaylist
