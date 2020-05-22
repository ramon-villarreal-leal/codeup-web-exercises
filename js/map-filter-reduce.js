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

console.log(users);

//

//2
let result = users.filter((user) => user.languages.length >= 3);
console.log(result);
//3

let mapResult = users.map((user) => user.email)

console.log(mapResult);


//4
let totalYears = users.reduce((total, person) => {
 return total + person.yearsOfExperience;
}, 0);

console.log(totalYears);
// average is list of users
const averageYears = users => totalYears / users.length;

console.log(averageYears(users));

//5 CASE OF REUSING FUNCTIONS LOOK AT 3!!!

let longestEmail = mapResult.reduce((email, person) => {
    if(person.length > email.length) {
         email = person;
    }
    return email;
}, mapResult[0]); // set to first thing to compare it to itself initially

console.log(longestEmail);



//6

// 2nd parameter person variable that refers to the singular of the for Each s

let instructorsString = users.reduce((userString, user) => {
    return userString + `${user.name}, `;
}, "Your instructors are: ");



console.log(instructorsString);
