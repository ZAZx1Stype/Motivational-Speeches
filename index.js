let display = document.getElementById('text-area');
const MotivationSpeech=["The temporary satisfaction of quitting is outweighed by the eternal suffering of being nobody.",

    "Find a person who is as successful as you'd like to be, ask them what to do, do it and work hard",
    
    "Your mind must be stronger than your feelings.",
    
    "Freedom will only come when you no longer trade your time for money." ,
    
    "Do the impossible and you’ll never doubt yourself ever again.",
    
     "You are exactly where you deserve to be. Change who you are and you will change how you live.",
    
    "Aspire to be a superhero. Not a normal person with a bigger house and nicer car.",
    
    "The man who goes to the gym every single day regardless of how he feels will always beat the man who goes to the gym when he feels like going to the gym.",
    
    "Absolutely every single one of my actions is intentional. Divine purpose. If your day is full of mindless action, you act without thought."
    ,
    "You must put in the effort to get the life you want.",
    "All our dreams can come true, if we have the courage to pursue them.",

    "The secret of getting ahead is getting started.",
    
    "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed.",
    
    "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    
    "Only the paranoid survive.",
    
    "It’s hard to beat a person who never gives up.",
    
    "I wake up every morning and think to myself, ‘How far can I push this company in the next 24 hours.’",
    
    "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes—understanding that failure is not the opposite of success, it’s part of success.",
    
    "Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.",
    
    "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
    "You can become rich, you can become strong, you can take care of your loved ones and enjoy the fact it will be very difficult.",

    "The amount of stress you can tolerate while remaining effective is directly correlated to the level of success you will enjoy.",

    "There is no joy without pain.",

    "Intellect is nothing without energy. Ideas are nothing without energy. High-energy people win",

    "If failure makes you stronger, you can never lose.",

    "Adversity builds men. It is your duty to challenge yourself and craft your own world.",

    "Stress tolerance is the best indicator of a person’s likelihood of success.",

    "A man without a vision for his future always returns to his past.",
    ];
// Array of image paths
const images = [
    './3.jpg',
    './1.webp',
    './1.jpg',
    './4.jpg',
    './5.jpg',
    './6.jpg',
    './7.jpg',
    './9.webp',
    './11.jpg',
    // Add paths to all your images
];

// Pick a random image from the array
const randomImage = images[Math.floor(Math.random() * images.length)];

// Set the random image as the background of the .container element
document.querySelector('.container').style.backgroundImage = `url(${randomImage})`;

function getRandomSpeech() {
    const index = Math.floor(Math.random() * MotivationSpeech.length);
    return MotivationSpeech[index];
}

display.innerText=getRandomSpeech()
