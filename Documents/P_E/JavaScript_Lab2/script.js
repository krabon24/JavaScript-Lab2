function randomDamage() {
    return Math.floor(Math.random() * 11);
}

function chooseOption(opt1, opt2) {
    let randNum = Math.round(Math.random());
    return randNum === 0 ? opt1:opt2;
}

function attackPlayer(health) {
        return health - randomDamage(); 
}

function logHealth(player, health) {
    console.log(`${player} health:${health}`);
}

function logDeath(winner, loser) {
    console.log(`${winner} defeated:${loser}`);
}

function isDead(health) {
    return health <= 0;
}

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
        player2Health = attackPlayer(player2Health);
        logHealth(player2, player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2)
                break;
            }     
    } else {
        player1Health = attackPlayer(player1Health);
        logHealth(player1, player1Health);
            if (isDead(player1Health)) {
                logDeath(player2, player1)
                break;
            }
    }
}
}

fight("goku", "gohan", 100, 100)

