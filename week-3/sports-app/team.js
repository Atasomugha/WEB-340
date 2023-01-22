/*
================================================
* Title: team.js
    Author: Professor Krasso
    Date: 22 January 2023
    Modified By: Anachebe Asomugha
    Description: Team Class module for WEB 340 
                 Assignment 2.2 - Node's Module System
================================================                                  
 */

"use-strict"; // Strict-mode

// Class creation
class Team {
    constructor (name, mascot, playerCount) {
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
};


module.exports = Team; // Exporting class with Node module export system