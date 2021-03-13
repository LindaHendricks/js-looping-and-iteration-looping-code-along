

function writeCards (name, event) {

     let thankYouCards = []

     for (let i = 0; i < name.length; i++) {

     thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)

    }
return thankYouCards

}

function countDown (startingNumber) {
    while (startingNumber > 0) {
        console.log (startingNumber); 
        --startingNumber;
    }
    console.log(startingNumber);
}


