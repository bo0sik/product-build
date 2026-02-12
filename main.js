const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

// Theme toggle functionality
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggleBtn.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Apply saved theme on load
(function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        themeToggleBtn.textContent = '🌙';
    }
})();

const quotes = [
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", author: "Steve Jobs" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { text: "Don't let the noise of others' opinions drown out your own inner voice.", author: "Steve Jobs" }
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayNewQuote() {
    const quote = getRandomQuote();
    
    // Fade out
    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;
    
    setTimeout(() => {
        quoteText.textContent = `"${quote.text}"`;
        quoteAuthor.textContent = `- ${quote.author}`;
        
        // Fade in
        quoteText.style.transition = 'opacity 0.5s ease';
        quoteAuthor.style.transition = 'opacity 0.5s ease';
        quoteText.style.opacity = 1;
        quoteAuthor.style.opacity = 1;
    }, 500);
}

if (newQuoteBtn) {
    newQuoteBtn.addEventListener('click', displayNewQuote);
}
