/*
* teams is an array of objects - each object contains a teamName, and an array of games played against them - as well as if the game was a win or loss
* eg 
* {
*   name: 'team1'
*   games: [{teamScore: 25, opponentScore: 27}]
* }
*/

export const getTeamAndGames = (data, year) => {
    let teams = []
    let yearData = data[year]
    yearData.forEach((week) => {
        let tier = week.tier
        week.games.forEach((game) => {
            let opponent = game.opponent
            let indexOfTeam = teams.findIndex(team => team.name === opponent)
            if(indexOfTeam !== -1) {
                let games = teams[indexOfTeam].games
                let currentGame = {
                    teamScore: game.teamScore,
                    opponentScore: game.opponentScore,
                    tier: tier
                }
                games.push(currentGame)
            } else {
                let currentGame = {
                    teamScore: game.teamScore,
                    opponentScore: game.opponentScore,
                    tier: tier
                }
                teams.push({
                    name: opponent,
                    games: [currentGame]
                })
            }
            
        })
    })
    return teams
}