function highlight() {
    // Select all strong elements
    const boldWords = document.querySelectorAll('strong');
    // Loop through each bold word and change its color to green
    boldWords.forEach(word => {
        word.style.color = 'green';
    });
}

function return_normal() {
    // Select all strong elements
    const boldWords = document.querySelectorAll('strong');
    // Loop through each bold word and revert its color to black
    boldWords.forEach(word => {
        word.style.color = 'black';
    });
}
