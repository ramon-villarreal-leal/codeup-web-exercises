"use strict";

// let url = `https://api.github.com/users/brancea/events/public`;


// let githubApi = fetch(url, {
//     headers:
//         {
//             'Authorization': `${GITHUB_API_KEY}`
//         }
// });


// function latestCommit(username) {
//     let url = `https://api.github.com/users/${username}/events/public`;
//     fetch(url, {
//         headers:
//             {
//                 'Authorization': `${GITHUB_API_KEY}`
//             }
//     }).then(response => response.json())
//         // .then(jsonResponse => jsonResponse)
//
//         //look at objects
//         // .then(events => console.log(events))
//         .then(events => console.log("Latest commit is on: " + new Date(events[1].created_at).toDateString()));
//
//     // .then(events => console.log("Latest commit is on: " + new Date(filter(events[1].created_at).toDateString())));
//
// }

function getLatestCommit(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {
        headers: {'Authorization': `${GITHUB_API_KEY}`}
    }).then(response => response.json())
        // .then(response => console.log(response));

        .then(events => {
            return events.filter(event => event.type === "PushEvent")[0].created_at;
        });
}
getLatestCommit('ramon-villarreal-leal');




//LOOK AT OBJECTS HERE IN ARRAY 30 IN TOTAL
// function getLatestCommit(username) {
//     return fetch(`https://api.github.com/users/${username}/events`, {
//         headers: {'Authorization': `${GITHUB_API_KEY}`}
//     }).then(response => response.json())
//         .then(response => console.log(response));
//
//     // .then(events => {
//     //     return events.filter(event => event.type === "PushEvent")[0].created_at;
//     // });
// }
// getLatestCommit('ramon-villarreal-leal');
//END OF LOOKING AT OBJECTS IN ARRAY



//
// getLatestCommit('ramon-villarreal-leal').then(date => {
//     console.log(new Date(date).toDateString());
// });


// function wait(seconds) {
//     return new Promise(resolve=>{
//         setTimeout(resolve, seconds);
//     });
// }
//
//
//
//
// wait(1000).then(() => console.log("You'll see this after 1 second"));
// wait(2000).then(() => console.log("You'll see this after 2 seconds"));
// wait(3000).then(() => console.log("You'll see this after 3 seconds"));

//
//
function versionTwoWait(seconds) {
    seconds = seconds * 1000;
    return new Promise(resolve => {
        setTimeout(() => {
            if(seconds > 1000) {
                console.log("kind of hell yeah?" + seconds/1000)

            } else if(seconds > 2000) {
                console.log("oh hell yeah brother!" + seconds/1000 + "seconds")
            } else if(seconds > 3000) {
                console.log("OH YEAH BROTHER HELL YEAH OVERLOAD" + seconds/1000 + "maximum hell yeah reached!!!")
            } else if (seconds > 5000) {
                console.log("OH BROTHER IM DEAD");
            }
        },seconds)
    });
}

versionTwoWait(1);
versionTwoWait(2);
versionTwoWait(3);
versionTwoWait(5);

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


// function wait (num) {
//     const waitMan = time => new Promise((resolve) => setTimeout(resolve, time));
//
// }
// function wait(num) {
//     const timeUp = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Resolve successful')
//         }, num)
//         timeUp.then(response => console.log(response));
//     });
// function millisecond(num) {
//     return num * 1000;
// }
//
// console.log(millisecond());

// const request = wait();


//     //original
//     wait(1000).then(console.log);
//     wait(3000).then(console.log);
// }


// wait(0).catch(() => console.log('You\'ll see this if you fail'));

// const testPromise = boolin = new Promise((resolve, reject) => setTimeout(resolve))

// function wait () {
//     const timeIsUp = time =>
//         new Promise((resolve) =>
//         setTimeout(resolve, time));
// }
//
// const request = timeIsUp;
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

