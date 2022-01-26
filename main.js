let btn = document.getElementById('btn');
let output = document.getElementById('output');
let punch = 
[ 
    "Ton père il ne serait pas dealer de weed ? Parce que t’es sacrément bien roulée !",
    "Ton père n’est pas fermier ? Parce que t’es une belle petite poule.",
    "Ton père, il ne fait pas des biscottes ? Parce que t’es craquante.",
    "Ton père n’est pas pilote ? Parce que franchement t’es un avion de chasse!",
    " On devrait t’arrêter pour excès de beauté sur la voie publique.",
    "Aurais-tu du feu ? Pour que j’allume ma cigarette et ton cœur en même temps.",
    "Tu ne dois sûrement pas embrasser les inconnus ? Donc, je me présente.",
    "Ton décolleté c’est comme un paquet de chocapic quand on le regarde on a envie de fourrer sa main dedans.",
    "L’amour c’est comme les photos, ça se développe dans le noir.",
    "Tu ne travaillerais pas dans l’armée ? Parce que franchement, t’es un canon !",
    "Je suis nouveau en ville, pourrais-tu m’indiquer le chemin pour aller à ton appartement ?",
    "C’est une échelle sur tes collants ou bien l’escalier vers le Paradis ?",
    "Quand je regarde tes fesses, j’y vois mon avenir. Et franchement il est radieux !",
    "Un coup de main mademoiselle ? Nan ? Alors un coup de rein ?!",
    "Tu pense quoi tu conflie israelo-palestinien (elle est de moi)",
    "Hey la miss aux cheveux lisses, t’as un 06",
    "Hey mademoiselle, tu t’appelles Google ? Parce que je trouve en toi tout ce que je recherche",
    "Ton père, c’est pas Ben Laden ? Non, parce que tu es une bombe !",
    "Moi sans toi, c’est comme un océan sans eau",
    "Ton père, il produirait pas 2,6 g de CO2 par jour en ne respectant de ce fait pas du tout l’accord de Paris sur le climat ? Parce que tu me fais fondre",
    "En temps normal je suis un très bon nageur, mais là je ne comprends pas je me noie dans tes yeux",
    "Ton père il serait pas dealer de weed ? Parce que t’es sacrément bien roulée.",
    "Ton père serait pas psy ? Parce que je suis fou de toi !",
    "Ton cul est tellement beau que c’est une honte que tu doives t’assoir dessus.",
    "Si un grain de sable voulait dire je t’aime, je t’offrirais le Sahara",
    "Je ne fume pas, je ne bois pas, et ma seule drogue, c’est toi",
    "Si un jour tu me quittes, fais le sous la pluie pour ne pas voir mes larmes",
    "Tu danses ? Non ? Ah, toi aussi tu es venu pour baiser ?",
    "Tu savais que la langue était un muscle ? On fait un bras de fer ?",
    "Fais gaffe t'as une étiquette qui dépasse... Y a écrit fabriqué au paradis",
    "Ton daron ce gros bâtard il a péta toutes les étoiles du ciel pour les quéplan dans tes yeux.",
    "Pour me rapprocher de ta beauté qui n'a d'égal que les cieux, je viens de prendre 18cm !",
    "Qu'est-ce qui a deux pouces et qui baise comme un dieu ? (tender vigoureusement les pouces vers vous-même.",
    "",
    
];
btn.addEventListener('click', function(){
    var randomPunch = punch[Math.floor(Math.random() * punch.length)]
    output.innerHTML = randomPunch;
})
