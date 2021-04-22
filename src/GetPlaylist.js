// import { gql, useQuery } from '@apollo/client';

// const getToken = async () => {
  
//   const result= await fetch('http://accounts.spotify.com/api/token', {
//     method: "POST",
//     headers: {
//       'Content-Type' : 'application/x-www-form-urlencoded',
//       'Authorization' : 'Basic ' + btoa(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET)
//     },
//     body: 'grant_type=client_credentials'
//   });

//   const data = await result.json();
//   return data.access_token;
// }

// console.log(getToken())

function GetTrack({ playlist }) {

  return (
    <>
      <p>StepZen says: "{JSON.stringify(playlist.artists)}"</p>
      <a
        className="App-link"
        href="https://stepzen.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn StepZen
      </a>
    </>
  );
}

export default GetTrack;
