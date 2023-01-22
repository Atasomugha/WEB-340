/*
================================================
* Title: team-manager.js
    Author: Professor Krasso
    Date: 22 January 2023
    Modified By: Anachebe Asomugha
    Description: team array module for WEB 340 
                 Assignment 3.2 - Node's Module System
================================================                                  
 */

"use-strict"; // Strict-mode

const Team = require("./team"); // Import class from team.js


// Object creation
const teams = [
    new Team ("Rocket City University", "Moon Men", 85),
    new Team ("University of Georgia, Fairburn", "Pandas", 85),
    new Team ("Death Valley State University", "Dingos", 85),
    new Team ("Metropolis University", "Bulldogs", 85),
    new Team ("Blue Mountain State University", "Goats", 85)
]


function getTeams() {
    return teams;
};

module.exports.getTeams = getTeams;

function getTeam(name) {
    for(let team of teams) {
        if (team.name === name){
            return team;
        }
    }
    
};

module.exports.getTeam = getTeam;

function displayTeam(team) {
    return "Name: " + team.name + '\n' +
            "Mascot: " + team.mascot + '\n' +
            "Player Count: " + team.playerCount + '\n';

};
module.exports.displayTeam = displayTeam;




