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
    "Tu pense quoi tu conflie israelo-palestinien",
];
btn.addEventListener('click', function(){
    var randomPunch = punch[Math.floor(Math.random() * punch.length)]
    output.innerHTML = randomPunch;
})
