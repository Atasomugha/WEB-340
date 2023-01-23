/*
================================================
* Title: index.js
    Author: Professor Krasso
    Date: 22 January 2023
    Modified By: Anachebe Asomugha
    Description: JavaScript file for WEB 340 
                 Assignment 3.2 - Node's Module System
================================================                                  
 */
"use-strict"; // Strict-mode

const TeamManager = require("./team-manager"); // Importing module from team-manager.js
const teamsOutput = TeamManager.getTeams(); // Retrieving team objects 

// Displaying All Teams
console.log("- - DISPLAYING TEAMS - -");
    for (team of teamsOutput) {
console.log(TeamManager.displayTeam(team));
    }


// First Single-Team Display
const rcu = TeamManager.getTeam("Rocket City University");

console.log('\n','\n')
console.log("- - DISPLAYING A SINGLE TEAM - -");
console.log(TeamManager.displayTeam(rcu));

// Second Single-Team Display

const dvsu = TeamManager.getTeam("Death Valley State University");

console.log("- - DISPLAYING A SINGLE TEAM - -");
console.log(TeamManager.displayTeam(dvsu));



