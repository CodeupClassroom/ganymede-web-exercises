const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLangs = users.filter((user) => user.languages.length > 2);
console.log(threeLangs);

let userEmails = users.map(user => {
    return user.email;
});

console.log(userEmails);

let totalExp = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);

console.log(totalExp);

let averageExp = totalExp/users.length;
console.log(averageExp);

let longestEmail = users.reduce((longestEmail, user) => {
    if (longestEmail.length > user.email.length) {
        return longestEmail;
    } else {
        return user.email;
    }
}, "");

console.log(longestEmail);

let instructorsString = users.reduce((finalString, instructor, index) => {
    if(index < users.length - 1) {
        return `${finalString}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1,instructor.name.length).toLowerCase()}, `
    } else {
        return `${finalString}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1,instructor.name.length).toLowerCase()}.`
    }
},"Your instructors are: ");

console.log(instructorsString);

let uniqueLangs = users.reduce((langList, user) => {
    for (let lang of user.languages) {
        if(!langList.includes(lang)) {
            langList.push(lang);
        }
    }
    return langList;
}, []);

let arr = users.reduce((langs, user) => {
    for (let lang of user.languages) {
        langs.push(lang);
    }
    return langs;
}, []);
let set = new Set(arr);
let uniqueLangsQuick = Array.from(set);

console.log(uniqueLangs);

console.log(uniqueLangsQuick);

