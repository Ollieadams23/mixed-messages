// 1. Store inspirational programming quotes

// 2. Store best practices/tips

// 3. Store programming wisdom

// 4. Create function to get random item from array

// 5. Generate random message from all three arrays

// 6. Display the message

const quotes = require('./quotes.json');
const practices = require('./bestpractices.json');
const wisdoms = require('./programmingwisdoms.json'); 

function getRandom(){
// Generate random indices for each array
    const quote = (Math.floor(Math.random()* quotes.quotes.length))
    const practice = (Math.floor(Math.random()* practices.best_practices_quotes.length))
    const wisdom = (Math.floor(Math.random()* wisdoms.wisdom.length))

    const message = quotes.quotes[quote] + "\n\n" + practices.best_practices_quotes[practice] + "\n\n" + wisdoms.wisdom[wisdom];
    console.log(message);
}

getRandom();