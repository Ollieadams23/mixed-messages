// 1. Store inspirational programming quotes

// 2. Store best practices/tips

// 3. Store programming wisdom

// 4. Create function to get random item from array

// 5. Generate random message from all three arrays

// 6. Display the message

let quotes, practices, wisdoms;

// Load JSON data
async function loadData() {
    const [quotesData, practicesData, wisdomsData] = await Promise.all([
        fetch('data/quotes.json').then(res => res.json()),
        fetch('data/bestpractices.json').then(res => res.json()),
        fetch('data/programmingwisdoms.json').then(res => res.json())
    ]);
    
    quotes = quotesData;
    practices = practicesData;
    wisdoms = wisdomsData;
}

function getMessage(){
// Generate random indices for each array
    const quote = (Math.floor(Math.random()* quotes.quotes.length))
    const practice = (Math.floor(Math.random()* practices.best_practices_quotes.length))
    const wisdom = (Math.floor(Math.random()* wisdoms.wisdom.length))

    const messages = [quotes.quotes[quote],
                        practices.best_practices_quotes[practice],
                        wisdoms.wisdom[wisdom]]

    return messages;
}

// Load data when page loads
loadData().then(() => {
    let message = getMessage();
    console.log(message);
});

generateWisdom = function() {
    let message = getMessage();
    document.getElementById("message1").innerText = message[0];
    document.getElementById("message2").innerText = message[1];
    document.getElementById("message3").innerText = message[2];
}