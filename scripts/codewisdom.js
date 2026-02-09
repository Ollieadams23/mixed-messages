// 1. Store inspirational programming quotes

// 2. Store best practices/tips

// 3. Store programming wisdom

// 4. Create function to get random item from array

// 5. Generate random message from all three arrays

// 6. Display the message

const quotes = require('../data/quotes.json');
const practices = require('../data/bestpractices.json');
const wisdoms = require('../data/programmingwisdoms.json'); 



function getMessage(){
// Generate random indices for each array
    const quote = (Math.floor(Math.random()* quotes.quotes.length))
    const practice = (Math.floor(Math.random()* practices.best_practices_quotes.length))
    const wisdom = (Math.floor(Math.random()* wisdoms.wisdom.length))

    const message = 'Quote' + "\n" + quotes.quotes[quote] + "\n\n" + 'Best Practice' + "\n" + practices.best_practices_quotes[practice] + "\n\n" + 'Wisdom' + "\n" + wisdoms.wisdom[wisdom];
    return message;
}

let message = getMessage();

console.log(message);