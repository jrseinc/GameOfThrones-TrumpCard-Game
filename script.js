    window.onload = function() {
        document.getElementById("my_audio").play();
    }   

const character = [
    {
        "Name": "Eddard Stark",
        "Title": "Lord of Winterfell",
        "Age": "40",
        "Power": "91",
        "Strength": "88",
        "Defence": "90",
        "Morality": "98",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/3/37/Eddard_Stark_infobox_new.jpg/revision/latest?cb=20160730050722"
    },
    {
        "Name": "Catelyn Stark",
        "Title": "Queen Mother",
        "Age": "35",
        "Power": "85",
        "Strength": "82",
        "Defence": "75",
        "Morality": "81",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/d/d8/CatelynS3Promo.jpg/revision/latest?cb=20131004004734"
    },
    {
        "Name": "Lyanna Stark",
        "Title": "Angel Mother",
        "Age": "19",
        "Power": "70",
        "Strength": "64",
        "Defence": "60",
        "Morality": "75",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/8/85/Lyanna_S7_E7.jpg/revision/latest?cb=20170830234842"
    },
    {
        "Name": "Benjen Stark",
        "Title": "First Ranger ",
        "Age": "36",
        "Power": "85",
        "Strength": "90",
        "Defence": "88",
        "Morality": "90",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/0/0f/610_Benjen_Promo_Crop.png/revision/latest?cb=20160629183134"
    },
    {
        "Name": "Sansa Stark",
        "Title": "Lady Stark",
        "Age": "19",
        "Power": "64",
        "Strength": "88",
        "Defence": "65",
        "Morality": "84",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/7/7e/Sansastark706.jpg/revision/latest?cb=20170828072803"
    },
    {
        "Name": "Arya Stark",
        "Title": "Princess",
        "Age": "17",
        "Power": "92",
        "Strength": "94",
        "Defence": "95",
        "Morality": "93",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/5/54/Arya_the_dragon_and_the_wolf_s7.jpg/revision/latest?cb=20170828062911"
    },
    {
        "Name": "Brandon Stark",
        "Title": "Three Eyed Raven",
        "Age": "16",
        "Power": "75",
        "Strength": "80",
        "Defence": "78",
        "Morality": "92",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/d/d8/%22It%27s_Wasted_On_A_Cripple%22.png/revision/latest?cb=20171006183914"
    },
    {
        "Name": "Rickon Stark",
        "Title": "Prince",
        "Age": "15",
        "Power": "61",
        "Strength": "62",
        "Defence": "57",
        "Morality": "55",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/d/d9/Battle_of_the_Bastards_42.jpg/revision/latest?cb=20160621185459"
    },
    {
        "Name": "Edmure Tully",
        "Title": "Lord of Riverrun",
        "Age": "30",
        "Power": "70",
        "Strength": "65",
        "Defence": "60",
        "Morality": "75",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/0/03/Edmure-Tully-Profile-HD.png/revision/latest?cb=20160723031806"
    },
    {
        "Name": "Jon Snow",
        "Title": " Lord Commander of the Night's Watch",
        "Age": "22",
        "Power": "92",
        "Strength": "94",
        "Defence": "90",
        "Morality": "95",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"
    },
    {
        "Name": "Theon Greyjoy",
        "Title": "Prince",
        "Age": "23",
        "Power": "75",
        "Strength": "65",
        "Defence": "68",
        "Morality": "88",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/TheonGreyjoy7x7.jpg/revision/latest?cb=20170823221606"
    },
    {
        "Name": "Master Luwin",
        "Title": "Master",
        "Age": "60",
        "Power": "70",
        "Strength": "75",
        "Defence": "77",
        "Morality": "92",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/b/b2/Luwin_infobox.jpg/revision/latest?cb=20120701225048"
    },
    {
        "Name": "Hodor",
        "Title": "Unknown",
        "Age": "40",
        "Power": "78",
        "Strength": "80",
        "Defence": "72",
        "Morality": "84",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/1/18/Season_6_hodor_main.jpg/revision/latest?cb=20160617020835"
    },
    {
        "Name": "Robb Stark",
        "Title": "Lord of Winterfell",
        "Age": "19",
        "Power": "88",
        "Strength": "86",
        "Defence": "90",
        "Morality": "93",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/5/50/S3E9_Robb_Stark_main.jpg/revision/latest?cb=20160718071203"
    },
    {
        "Name": "Talisa Maegyr",
        "Title": "Queen Consort",
        "Age": "17",
        "Power": "74",
        "Strength": "71",
        "Defence": "69",
        "Morality": "92",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/c/ca/Talisa3x9.jpg/revision/latest?cb=20150515053353"
    },
    {
        "Name": "Brienne Tarth",
        "Title": "Brienne of Tarth",
        "Age": "33",
        "Power": "90",
        "Strength": "89",
        "Defence": "89",
        "Morality": "80",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/6/64/Brienne.PNG/revision/latest?cb=20170822095536"
    },
    {
        "Name": "Ser Jaime Lannister",
        "Title": "Lord Commander of the Kingsguard",
        "Age": "42",
        "Power": "87",
        "Strength": "80",
        "Defence": "81",
        "Morality": "94",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/e/eb/Jaime.jpg/revision/latest?cb=20170818052054"
    },
    {
        "Name": "Cersei Lannister",
        "Title": "Protector of the Seven Kingdoms",
        "Age": "42",
        "Power": "92",
        "Strength": "95",
        "Defence": "90",
        "Morality": "79",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/c/c3/Profile-CerseiLannister.png/revision/latest?cb=20170828071355"
    },
    {
        "Name": "Tyrion Lannister",
        "Title": "Hand of the Queen ",
        "Age": "38",
        "Power": "88",
        "Strength": "70",
        "Defence": "75",
        "Morality": "97",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/5/58/Tyrion_main_s7_e6.jpg/revision/latest?cb=20170818050344"
    },
    {
        "Name": "Tywin Lannister",
        "Title": "Lord of Casterly Rock",
        "Age": "67",
        "Power": "91",
        "Strength": "90",
        "Defence": "93",
        "Morality": "92",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/7/71/Tywin_Lannister_4x08.jpg/revision/latest?cb=20170830015346"
    },
    {
        "Name": "Kevan Lannister",
        "Title": "Hand of the King*",
        "Age": "60",
        "Power": "87",
        "Strength": "81",
        "Defence": "90",
        "Morality": "87",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/6/6d/Kevan-profile.png/revision/latest?cb=20170421102914"
    },
    {
        "Name": "Joffrey I Baratheon",
        "Title": "The Boy King",
        "Age": "19",
        "Power": "92",
        "Strength": "85",
        "Defence": "84",
        "Morality": "66",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/2/25/Joffrey_Season_4_Episode_2_TLATR.jpg/revision/latest?cb=20171105180252"
    },
    {
        "Name": "Tommen I Baratheon",
        "Title": "Lord of the Seven Kingdoms",
        "Age": "16",
        "Power": "85",
        "Strength": "80",
        "Defence": "70",
        "Morality": "85",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/7/7c/Tommen_blood_of_my_blood.jpg/revision/latest?cb=20160530234845"
    },
    {
        "Name": "Myrcella Baratheon",
        "Title": "Princess",
        "Age": "19",
        "Power": "70",
        "Strength": "68",
        "Defence": "60",
        "Morality": "80",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/0/02/MyrcellaS5Cropped.jpg/revision/latest?cb=20160802025401"
    },
    {
        "Name": "Lancel Lannister",
        "Title": "King's Squire",
        "Age": "21",
        "Power": "76",
        "Strength": "70",
        "Defence": "71",
        "Morality": "78",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/No_One_09.jpg/revision/latest?cb=20170829235034"
    },
    {
        "Name": "Sandor Clegane",
        "Title": "The Hound",
        "Age": "55",
        "Power": "80",
        "Strength": "84",
        "Defence": "88",
        "Morality": "90",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/b/bc/Sandor_Clegane_Season_7_Promo_Image.PNG/revision/latest?cb=20170828063713"
    },
    {
        "Name": "Gregor Clegane",
        "Title": "Tywin Lannister's Mad Dog",
        "Age": "58",
        "Power": "82",
        "Strength": "85",
        "Defence": "86",
        "Morality": "60",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/9/9b/Conan_infobox.png/revision/latest?cb=20170903034744"
    },
    {
        "Name": "The Mountain",
        "Title": "The Mountain",
        "Age": "-",
        "Power": "88",
        "Strength": "90",
        "Defence": "92",
        "Morality": "60",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/5/5d/Gregor_closeup_ep7.png/revision/latest?cb=20170903033840"
    },
    {
        "Name": "Ilyn Payne",
        "Title": "King's Justice",
        "Age": "59",
        "Power": "75",
        "Strength": "72",
        "Defence": "70",
        "Morality": "70",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/0/03/Ilyn_Payne_infobox.jpg/revision/latest?cb=20160730061137"
    },
    {
        "Name": "Barristan Selmy",
        "Title": "Lord Commander of the Kingsguard",
        "Age": "55",
        "Power": "92",
        "Strength": "94",
        "Defence": "94",
        "Morality": "94",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/1/1f/Barristan_Selmy_Sons_of_the_Harpy.jpg/revision/latest?cb=20150504180820"
    },
    {
        "Name": "Pycelle",
        "Title": "Grand Maester",
        "Age": "72",
        "Power": "82",
        "Strength": "83",
        "Defence": "80",
        "Morality": "76",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/0/0b/Pycelle_Infobo_Image.PNG/revision/latest?cb=20170421111211"
    },
    {
        "Name": "Podrick Payne",
        "Title": "Pod",
        "Age": "26",
        "Power": "74",
        "Strength": "73",
        "Defence": "71",
        "Morality": "86",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/4/48/GOT_Season_7_15.jpg/revision/latest?cb=20170824224117"
    },
    {
        "Name": "Sansa Stark",
        "Title": "Lady of Winterfell",
        "Age": "19",
        "Power": "80",
        "Strength": "88",
        "Defence": "84",
        "Morality": "90",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/7/7e/Sansastark706.jpg/revision/latest?cb=20170828072803"
    },
    {
        "Name": "Lord Varys",
        "Title": "Master of Whisperers",
        "Age": "57",
        "Power": "92",
        "Strength": "88",
        "Defence": "80",
        "Morality": "80",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/Varys_Season_7_Promo_Image.PNG/revision/latest?cb=20170829183654"
    },
    {
        "Name": "Jorah Mormont",
        "Title": "Lord of Bear Island ",
        "Age": "48",
        "Power": "84",
        "Strength": "82",
        "Defence": "83",
        "Morality": "90",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/f/f5/706_Jorah_Profile.png/revision/latest/scale-to-width-down/350?cb=20170823224935"
    },
    {
        "Name": "Petyr Baelish",
        "Title": "Lord Protector of the Vale",
        "Age": "40",
        "Power": "85",
        "Strength": "82",
        "Defence": "74",
        "Morality": "70",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/9/9f/Profile-Littlefinger.png/revision/latest?cb=20170826005231"
    },
    {
        "Name": "Aerys II Targaryen",
        "Title": "King of the Andals and the First Men",
        "Power": "97",
        "Strength": "95",
        "Defence": "89",
        "Morality": "74",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/4/47/Aerys_II_Targaryen_Mad_King.jpg/revision/latest/scale-to-width-down/350?cb=20170821102509"
    },
    {
        "Name": "Viserys Targaryen",
        "Title": "Viserys of the House Targaryen, the Third of His Name",
        "Age": "22",
        "Power": "72",
        "Strength": "81",
        "Defence": "85",
        "Morality": "76",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/4/46/Viseryspromoheadshot.jpg/revision/latest/scale-to-width-down/350?cb=20160730184148"
    },
    {
        "Name": "Daenerys Targaryen",
        "Title": "Daenerys of the House Targaryen, the First of Her Name",
        "Age": "22",
        "Power": "93",
        "Strength": "96",
        "Defence": "91",
        "Morality": "98",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/Daenerys_Dragonpit.jpg/revision/latest?cb=20171015095128"
    },
    {
        "Name": "Rhaegar Targaryen",
        "Title": "Prince of Dragonstone",
        "Power": "87",
        "Strength": "90",
        "Defence": "90",
        "Morality": "80",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/5/51/Rhaeger_main_infobox.png/revision/latest/scale-to-width-down/306?cb=20170829183657"
    },
    {
        "Name": "Lyanna Stark",
        "Title": "Princess Consort",
        "Power": "70",
        "Strength": "64",
        "Defence": "54",
        "Morality": "82",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/8/85/Lyanna_S7_E7.jpg/revision/latest/scale-to-width-down/301?cb=20170830234842"
    },
    {
        "Name": "Jon Snow",
        "Title": "Lord Snow",
        "Age": "22",
        "Power": "89",
        "Strength": "91",
        "Defence": "90",
        "Morality": "88",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"
    },
    {
        "Name": "Drogo",
        "Title": "Khal",
        "Age": "25",
        "Power": "88",
        "Strength": "87",
        "Defence": "88",
        "Morality": "78",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/1/1f/Drogo_1x01b.jpg/revision/latest/scale-to-width-down/307?cb=20110626031733"
    },
    {
        "Name": "Aemon",
        "Title": "Prince",
        "Age": "104",
        "Power": "84",
        "Strength": "70",
        "Defence": "64",
        "Morality": "94",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/3/32/Aemonepisode5.png/revision/latest/scale-to-width-down/328?cb=20150511170352"
    },
    {
        "Name": "Missandei",
        "Age": "23",
        "Power": "80",
        "Strength": "72",
        "Defence": "81",
        "Morality": "85",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/0/0d/Profile-Missandei.PNG/revision/latest/scale-to-width-down/314?cb=20170818044646"
    },
    {
        "Name": "Kovarro",
        "Title": "Bloodrider",
        "Power": "70",
        "Strength": "75",
        "Defence": "84",
        "Morality": "80",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a7/Kovarro_image_new.jpg/revision/latest?cb=20160625082705"
    },
    {
        "Name": "Daario Naharis",
        "Title": "Regent of the Bay of Dragons",
        "Power": "72",
        "Strength": "68",
        "Defence": "80",
        "Morality": "78",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/d/d8/Daario-s6e4.jpg/revision/latest/scale-to-width-down/323?cb=20160512195958"
    },
    {
        "Name": "Grey Worm",
        "Power": "80",
        "Strength": "77",
        "Defence": "74",
        "Morality": "62",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/0/0c/Grey_Worm_Longer.jpg/revision/latest/scale-to-width-down/332?cb=20170728152422"
    },
    {
        "Name": "Tyrion Lannister",
        "Title": "Hand of the Queen",
        "Age": "38",
        "Power": "90",
        "Strength": "70",
        "Defence": "75",
        "Morality": "97",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/5/58/Tyrion_main_s7_e6.jpg/revision/latest?cb=20170818050344"
    },
    {
        "Name": "Jorah Mormont",
        "Title": "Lord of Bear Island",
        "Age": "48",
        "Power": "87",
        "Strength": "82",
        "Defence": "83",
        "Morality": "90",
        "Image": "https://vignette.wikia.nocookie.net/gameofthrones/images/f/f5/706_Jorah_Profile.png/revision/latest/scale-to-width-down/350?cb=20170823224935"
    }
]

//audio files
let attWins = document.querySelector("#attWins");
let diffWins = document.querySelector('#diffWins');

//this will store number from 0 to 49 which will be shuffled and later divided into two decks of cards
let stockArray = [];

for(let i = 0; i < 50; i++){
    stockArray.push(i);
}
console.log(stockArray);

//helper function for shuffling the array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

//p1Cards and p2Cards will store the index of their indivisual cards
stockArray = shuffle(stockArray);
let p1Cards = [];
let p2Cards = [];

for(let i = 0; i < 26; i++){
    p1Cards.push(stockArray[i]);
}

for(let i = 26; i < 50; i++){
    p2Cards.push(stockArray[i]);
}

// for(let i = 0; i < p1Cards.length; i++){
//     console.log(character[p1Cards[i]]);
// }
// console.log("/*/*/  P2 /*/*/*");
// for(let i = 0; i < p2Cards.length; i++){
//     console.log(character[p2Cards[i]]);
// }

//////////////////GamePlay

//chance means the current attacking player, at the start of the game player 1 will be the attacker
let chance = 1;

//
let attributeArr;

let currentMatch = {
    i: "",
    target: ""
}
// console.log(chance);

// this bindedFunction will store the refrence to the fucntion created using bind in listenForSelection Function
let bindedFunction = [];

//set content of the card, target will point to the which cards need to updated (1/2) and status (true/false) will give the information about what kind of content needs to be writen in the card
//the original values (attacker) or dummy vakues (defender)
function setContent(target, status){

    //check for the respective id in the html document
    let pImage = document.querySelector(`#character-${target}-image`);

    let pName = document.querySelector(`#character-${target}-name`);
    let PRole = document.querySelector(`#character-${target}-role`);
    
    let pAge = document.querySelector(`#character-${target}-age`);
    let pPower = document.querySelector(`#character-${target}-power`);
    let pStrength = document.querySelector(`#character-${target}-strength`);
    let pDefence = document.querySelector(`#character-${target}-defence`);
    let pMorality = document.querySelector(`#character-${target}-morality`);
    let pAverage = document.querySelector(`#character-${target}-average`);

    
    //for card 1
    if(target === 1){
        if(status == true){
            //set true values
            pImage.style.backgroundImage = `url("${character[p1Cards[0]].Image}")`;
            pName.textContent = character[p1Cards[0]].Name;
            PRole.textContent = character[p1Cards[0]].Title;
            
            pAge.textContent = character[p1Cards[0]].Age;
            pPower.textContent =  character[p1Cards[0]].Power;
            pStrength.textContent = character[p1Cards[0]].Strength;
            pDefence.textContent = character[p1Cards[0]].Defence;
            pMorality.textContent = character[p1Cards[0]].Morality;
            pAverage.textContent = 999;
        }else{
            //set false values
            pImage.style.backgroundImage = 'url("./media/dummy.jpg")';
            pName.textContent = "- - -";
            PRole.textContent = "- - -";
            
            pAge.textContent = "- - -";
            pPower.textContent = "- - -";
            pStrength.textContent = "- - -";
            pDefence.textContent = "- - -";
            pMorality.textContent = "- - -";
            pAverage.textContent = "- - -";
        }
    //for card 2
    }else{
        if(status == true){
            //set true values
            pImage.style.backgroundImage = `url("${character[p2Cards[0]].Image}")`;
            pName.textContent = character[p2Cards[0]].Name;
            PRole.textContent = character[p2Cards[0]].Title;
            
            pAge.textContent = character[p2Cards[0]].Age;
            pPower.textContent =  character[p2Cards[0]].Power;
            pStrength.textContent = character[p2Cards[0]].Strength;
            pDefence.textContent = character[p2Cards[0]].Defence;
            pMorality.textContent = character[p2Cards[0]].Morality;
            pAverage.textContent = 999;

        }else{
            //set false values
            pImage.style.backgroundImage = 'url("./media/dummy.jpg")';
            pName.textContent = "- - -";
            PRole.textContent = "- - -";
            
            pAge.textContent = "- - -";
            pPower.textContent = "- - -";
            pStrength.textContent = "- - -";
            pDefence.textContent = "- - -";
            pMorality.textContent = "- - -";
            pAverage.textContent = "- - -";
        }
    }
}

var judge = function(i, target){
    console.log(`${target} : here`);
    let opposite = (target == 1) ? 2 : 1;
    let attribute = "";
    switch (i){
        case 0:
            attribute = "Age";
            break;
        case 1: 
            attribute = "Power";
            break;
        case 2:
            attribute = "Strength";
            break;
        case 3:
            attribute = "Defence";
            break;
        case 4:
            attribute = "Morality";
            break;
        case 5: 
            attribute = "Average";
            break;
    }

    // console.log(attribute);
    console.log(`Player ${target} choose ${attribute}`); 

    for(let i = 0; i < attributeArr.length; i++){
        attributeArr[i].removeEventListener('click', bindedFunction.shift());
    }

    
    setContent(opposite, true);

    let P1ChoiceValue = character[p1Cards[0]][`${attribute}`];
    let P2ChoiceValue = character[p2Cards[0]][`${attribute}`];

    console.log(P1ChoiceValue);
    console.log(P2ChoiceValue);

    //winner
    let winner = (P1ChoiceValue >= P2ChoiceValue) ? 1 : 2;
    if(chance === winner){
        // console.log("attacker wins");
        attWins.play();
    }else{
        // console.log("attacker loose");
        diffWins.play();
        chance = opposite;
    }
    // if(opposite === 1){
    //     p1Cards.shift();
    // }else{
    //     p2Cards.shift();
    // }
    p1Cards.shift();
    p2Cards.shift();
    console.log("p1 length " + p1Cards.length);
    console.log("p2 length " + p2Cards.length);
    setTimeout( ()=>{
        roundManager(); 
    }, 2000);
}

// let welcome = function(i){
//     console.log(i);
//     for(let i = 0; i < attributeArr.length; i++){
//         attributeArr[i].removeEventListener('click', bindedFunction[i]);
//     }
// }

function listenForSelection(target){
    attributeArr = document.querySelectorAll(`.power-container-p${target}`);
    for(let i = 0; i < attributeArr.length; i++){
        const tempBind = judge.bind(null, i, target);
        bindedFunction.push(tempBind);
        attributeArr[i].addEventListener('click', tempBind);
    }
}

//this fucntion will be called in very round. This function provide the core functionality of the gameplay
function roundManager(){
    //oppsite will represent the defenders side
    let opposite = (chance == 1) ? 2 : 1;
    let PRole = document.querySelector(`#player-${chance}-role`);
    PRole.textContent = "👑 ATTACKERS";
    let PORole = document.querySelector(`#player-${opposite}-role`);
    PORole.textContent = "DEFENDERS";
    //set content for the defeneders side first
    // console.log(character[p1Cards[0]]);
    // console.log(character[p2Cards[0]]);

    console.log("attacker " + chance);
    console.log("defender: " + opposite);

    //if any one player runs out of cards in his deck then this will be logged to the console. 
    if(p2Cards.length === 0 || p2Cards.length === 0)
        console.log("exhausted");

    setContent(opposite, false);
    //set content for the attackers side
    setContent(chance, true);

    //listen for the selection on attackers side 
    listenForSelection(chance);

}

roundManager();



