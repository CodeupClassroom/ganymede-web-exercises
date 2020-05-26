"use strict";

// make a function takes in GitHub username
// returns a promise
// resolves to date of the most recent commit

function getLastCommitDate(username){
    return fetch(`https://api.github.com/users/${username}/events`, {
        headers: {'Authorization': `token ${GITHUB_API_KEY}`}
    }).then(response => response.json())
        // we want to filter through PushEvents only
        .then(events => {
            return events.filter(event => event.type === "PushEvent")[0].created_at;
        });
}

getLastCommitDate('sophiakurihara').then(date => {
    console.log(new Date(date).toDateString());
});

function wait(seconds){
    seconds = seconds * 1000;
    return new Promise(resolve => {
       setTimeout(resolve,seconds)
    });
}
wait(1).then(() => console.log("You'll see this after 1 second"));
wait(2).then(() => console.log("You'll see this after 2 seconds"));
wait(3).then(() => console.log("You'll see this after 3 seconds"));


function waitVersionTwo(seconds){
    seconds = seconds * 1000;
    return new Promise(resolve => {
        setTimeout(() => {
            if(seconds > 1000){
                console.log("You'll see this after " + seconds/1000 + " seconds.")
            }else{
                console.log("You'll see this after " + seconds/1000 + " second.")
            }
        },seconds)
    });
}
waitVersionTwo(1);
waitVersionTwo(5);