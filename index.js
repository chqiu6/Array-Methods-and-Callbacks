const fifaData = require('./fifa.js');
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const worldCupFinal = fifaData.filter(match => match.Year === 2014 && match.Stage  === "Final")[0];
console.log(worldCupFinal["Home Team Name"]);
console.log(worldCupFinal["Away Team Name"]);
console.log(worldCupFinal["Home Team Goals"]);
console.log(worldCupFinal["Away Team Goals"]);
console.log(worldCupFinal["Win conditions"].split(' ')[0]);

const filterhometeam = fifaData.filter((names) => {
    return names.Year == "2014" && names.Stage === "Final"[0];
});
console.log(filterhometeam["Home Team Name"]);
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
function getFinals(data){
    return data.filter(match => match.Stage === "Final");
}
console.log(getFinals(fifaData));
// my verison down below
// function getFinals(array){
//     const filterarray = array.filter((data) =>{
//       return data.Stage === "Final";
//     });
//     console.log(filterarray);
//   }
//   getFinals(fifaData);
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
function getYears (cb){
return cb(fifaData).map(match=> match.Year);
}
console.log(getYears(getFinals));
/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
    //make variable that represents the finals game
    //Determine whos the winner 

    return cb (fifaData).map(match  => {
        if (match["Home Team Goals"] > match["Away Team Goals"]){
            return match["Home Team Name"];
        }else {
            return match["Away Team Name"];
        }
    });
}
    console.log(getWinners(getFinals));


// getWinners(getWinners, getYears);

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2 ) {
    const years =cb2(getFinals);
    return cb1(getFinals).map ((teamName, index) =>  `In ${years[index]}, ${teamName} won the world cup!`)
};

console.log(getWinnersByYear(getWinners, getYears));


/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data,initials){
    let count = 0;
const finalist = data.map(item => {
    if (item["Home Team Goals"] > item["Away Team Goals"]){
        return item["Home Team Initials"];
    }else {
        return item["Away Team Initials"];
    }
})
finalist.forEach(name =>{
 if(name === initials ){
     count++;
 }
})
return count;
}
console.log(getCountryWins(getFinals(fifaData), "BRA"));

// function getCountryWins(data){
//     //getwinner getfinals give the winners
//     //create new array variable ? 
//     // maybe make a counter ?
//     //maybe use reduce to count the total of the country's name wins that repeat ?
//     // return the winner with most repeats ?
//     //attempt to use slice or substr to get 3 chars for the winner ?
    

// let winners = data.reduce(acc, item => {
//     let count = 0;
//     if item[]
// },0);
// }
// getCountryWins(getWinners(getFinals));
// function getCountryWins(data){
// let winners = data;
// console.log(`testin ${winners}`); 
// }
// getCountryWins(getWinners(getFinals));
// function getCountryWins(data) {
//     const finalist = data.filter(match => match.Stage === "Final");
//     console.log(`finals ${finalist}`);
// }
// getCountryWins(fifaData);


/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match 
(Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    //grab home team goals and away team goals
    //get sum of these two
    // divide sum by data length
    // console log the avg
    // round avg
let HomeGoals = data.reduce((acc, item )=> acc + item[`Home Team Goals`], 0) / data.length;
console.log(`Home ${HomeGoals.toFixed(3)}`);
let AwayGoals = data.reduce((acc, item)=> acc + item["Away Team Goals"], 0) / data.length;
console.log(`Away ${AwayGoals.toFixed(3)}`);
};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
