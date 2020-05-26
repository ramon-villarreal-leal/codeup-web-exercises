"use strict";

// let url = `https://api.github.com/users/brancea/events/public`;


// let githubApi = fetch(url, {
//     headers:
//         {
//             'Authorization': `${GITHUB_API_KEY}`
//         }
// });


function latestCommit(username) {
    let url = `https://api.github.com/users/${username}/events/public`;
    fetch(url, {
        headers:
            {
                'Authorization': `${GITHUB_API_KEY}`
            }
    }).then(response => response.json())
        // .then(jsonResponse => jsonResponse)

        //look at objects
        // .then(events => console.log(events))
        .then(events => console.log("Latest commit is on: " + new Date(events[0].created_at).toDateString()));



}

latestCommit('ramon-villarreal-leal');
latestCommit('brancea');




// githubApi.then(response => response.json())
//     .then(jsonResponse => console.log(jsonResponse))
//
//     .catch(error => console.log(error));
//
// console.log(githubApi);


//
//
// function lastCommit(){
//     githubApi.then(response => response.json())
//         .then(jsonResponse => console.log(jsonResponse[0].created_at));
//
// }
//
// console.log(lastCommit());


//make your own promise

const wait = time => new Promise((resolve) => setTimeout(resolve, time));

function millisecond(num) {
    return num * 1000;
}

console.log(millisecond());


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// wait(0).catch(() => console.log('You\'ll see this if you fail'));

// const testPromise = boolin = new Promise((resolve, reject) => setTimeout(resolve))


