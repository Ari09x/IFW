var image = document.getElementById("placeholderimage");
var question = 1;
var isStarted = false;
var frozen = false;
var timer = 0;
var score = 0;

function showQuestion() {
    if(frozen) {
        return;
    }
    question = getRandomIntInclusive(0, Object.keys(Answers).length - 1);
    image.src = Pictures[question];
}

function clickedNotFascist() {
    checkAnswer("Not Fascist");
    return;
}

function clickedFascist() {
    checkAnswer("Fascist");
    return;
}

function startTimer() {
    const intervalId = setInterval(() => {
        timer++;
        document.getElementById("time").innerHTML = "Timer<br>" + timer;
        isStarted = true;
        let explanation = ""
        if(timer === 30 || frozen) {
            if(frozen) {
                explanation = "<p>" + Explanations[question] + "<p>"
            }
            clearInterval(intervalId);
            image.outerHTML = "<h1>Score: " + score + "</h1> " + explanation;
            frozen = true;
        }
    }, 1000);
}

function checkAnswer(guess) {
    if(frozen) {
        return;
    }
    if(isStarted === false) {
        isStarted = true;
        startTimer();
    }
    let div = document.getElementById("game");
    if(guess === Answers[question]) {
        score++;
        document.getElementById("score").innerHTML = "Score<br>" + score;
        div.style.backgroundColor = "lightgreen";
        console.log("Correct!");
    } else {
        frozen = true;
        div.style.backgroundColor = "red";
        console.log("Incorrect!");
    }
    showQuestion();
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);   // Ensure min is an integer
  max = Math.floor(max); // Ensure max is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Answers = {
    0 : "Not Fascist",
    1 : "Fascist",
    2 : "Fascist",
    3 : "Not Fascist",
    4 : "Fascist",
    5 : "Fascist",
    6 : "Fascist",
    7 : "Fascist",
    8 : "Fascist",
    9 : "Fascist",
    10 : "Fascist",
    11 : "Fascist",
    12 : "Fascist",
    13 : "Not Fascist",
    14 : "Not Fascist",
    15 : "Not Fascist",
    16 : "Not Fascist",
    17 : "Not Fascist",
    18 : "Not Fascist",
};

const Pictures = {
    0 : "game/antifa.png",
    1 : "game/swastika.png",
    2 : "game/othela.svg",
    3 : "game/hammerandsickle.png",
    4 : "game/celticcross.png",
    5 : "game/blacksun.png",
    6 : "game/wolfsangel.png",
    7 : "game/ssbolts.png",
    8 : "game/fasces.png",
    9 : "game/ironcross.png",
    10 : "game/1488.avif",
    11 : "game/liferune.png",
    12 : "game/kolovrat.png",
    13 : "game/circlea.png",
    14 : "game/ossrune.png",
    15 : "game/fistandrose.png",
    16 : "game/ironfront.svg",
    17 : "game/buddhistswastika.png",
    18 : "game/chineseflag.png",
}

const Explanations = {
    0 : "ANTIFA stands for ANTI FAscist Action, and is explicitly an antifascist movement.",
    1 : "The Swastika was used in Nazi Germany as primary symbol of fascism.",
    2 : "The Winged Odal is a common Fascist symbol origionally co-opted by the Nazis and was featured on the SS uniform. Make sure not to confuse it with its un-winged counterpart, witch is not a fascist symbol.",
    3 : "Although the Hammer and Sickle is an authoritarian symbol, it is Communist and not Fascist.",
    4 : "The Celtic Cross is the second  most used Fascist symbol, behind the swastika and origionally came from celtic symbology before being co-opted by fascists.",
    5 : "The black sun was orginally the design of a castle floor tha Nazi's built. Unlike other fascist symbols, witch have been co-opted by facsists, the Black Sun is exclusively Fascist, as it was created by the Nazis.",
    6 : "The wolfsangel is another rune appropriated by Fascists, and can be rotated to look like either an N or a Z.",
    7 : "The SS Bolts are 2 bolts from the Runic alphabet. They were a prominent feature of the SS unifomr and can also take on the appearance of thunderbolts",
    8 : "The fasces origionally dates back to the Romans, as a symbol of strength through unity (One stick is easy to break, a bundle is hard) Although not originally fascist, it is what the word Fascism is derived from and is a prominant Italian fascist symbol.",
    9 : "Although having a long history, not all of witch is fascist, the Iron cross was used as a fascist medal and is commonly used by fascists trying to avoid more overtly fascist imagery.",
    10 : "The numbers 14 and 88 are both commonly used as Fascists Dogwhistles. 88 refears to the 8th Letter of the Alphabet (H) so HH, the abreviated form of Heil Hitler. 14 refers to the 14 Words slogan: \"We must secure the existence of our people and a future for white children\". They are both used seperately to signal Fascist alleigance, but if they are put together (as in 1488) You are certainly dealing with a fascist.",
    11 : "The life rune was originally a rune, but has since been apropriated by fascists, the context being \"Survival of the Master Race\".",
    12 : "The Kolovrat is a symbol from Slavic Paganism, and is occasionally used by fascists. If someone is using this symbol, do not immediatly assume they are a fascist, because there are plenty of non-fascists that use it, but definitly be carefull.",
    13 : "The Circle A is the symbol of Anarchists, witch is extremely incompatible with Fascism, and many of whom fight against Fascists.",
    14 : "The Oss rune is from the runic alphabet, although it has never been associated with fascists, and is a good example of runes that are not co-opted by Fascists.",
    15 : "The Fist and Rose is a symbol used by Democratic Socialists and Social Democrats. This symbol is not Fascist.",
    16 : "The 3 Arrows is the symbol of the Iron Front, standing for the downfall of Monarchism, Fascism, and Authoritarian Communism. It is an explicitly Anti-Fascist symbol and is used by Anti-Authoritarians across the world.",
    17 : "The Buddhist Swastika looks very similar to the Nazi swastika, but is actually a buddhist symbol often seen in temples and shrines. You can tell it apart from the Fascist version by looking at witch way it turns. If its is counter-clockwise, It is the Buddhist symbol, and if it is clockwise, it's the Fascist one.",
    18 : "The Chinese flag, and the CCP (Chinese Communist Party) is an authoritarian regime, but it is not Fascist in nature.",
}