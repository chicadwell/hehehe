document.addEventListener("DOMContentLoaded", function() {
    let phrases = [
        "فرشته قشنگم"
        "I love your eyes, Ariana ❤️",
        "I love your smile, Ariana 😊",
        "You make me happy every day 💖",
        "You're my everything, Ariana 💕",
        "Chica loves you more than anything in the world 🌎",
        "You're the best thing that ever happened to me 🌟",
        "I can't stop thinking about you 💭",
        "Forever and always, Ariana ❤️",
        "You're my dream come true ✨",
        "You are the love of my life 💘",
        "Every moment with you is special 💑",
        "I love you more than words can say 💓",
        "Your laughter is my favorite sound 🎶",
        "You make my world brighter ☀️",
        "I'm the luckiest person to have you 🍀",
        "My heart beats only for you 💞",
        "You're my beautiful dream that came true 💫",
        "I adore everything about you 💖",
        "You're the most precious gift in my life 🎁",
        "You're my forever and always ❤️"
        "عاشقتم نینی کوچولوی چیکاش"
        "میمیرم براتااا"
    "زندگی منیا"
    "جون منیا"
    "فدات بشم الهییی"
    "قربونت میرما"
    "دورت بگرده چیکااا"
    ];
    let background = document.querySelector(".background-text");
    for (let i = 0; i < 30; i++) {
        let text = document.createElement("div");
        text.classList.add("love-text");
        text.innerText = phrases[Math.floor(Math.random() * phrases.length)];
        text.style.left = Math.random() * 100 + "vw";
        text.style.top = Math.random() * 100 + "vh";
        text.style.animationDuration = (8 + Math.random() * 5) + "s";
        background.appendChild(text);
    }
});
function showLove() {
    document.getElementById("loveMessage").style.display = "block";
    document.getElementById("sadMessage").style.display = "none";
}
function showSad() {
    document.getElementById("sadMessage").style.display = "block";
    document.getElementById("loveMessage").style.display = "none";
}
