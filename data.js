var liste1 = ["une couleur", "un art", "une pierre", "une saveur de glace", "un super-pouvoir", "un animé", "un signe du zodiaque"];

var liste2 = ["le violet", "la musique", "l'aigüe-marine", "la vanille","la glace","Violet Evergarden"," la Balance"];

var liste3 = ["images/violet-pur.jpg", "images/musique.jpg", "images/aigue-marine.jpg", "images/vanille.jpg", "images/glace.jpg", "images/Evergarden.png", "images/balance.jpg"];

var liste4 = ["C'est une couleur profonde qui rend bien peu importe si sa teinte est claire ou foncée.", "Car la musique exprime et fait ressentir beaucoup de choses.", "C'est une pierre semi-précieuse que je trouve belle de par sa couleur bleu claire.", "Car c'est mon parfum de glace préféré, doux et sucré sans être trop fort.", "Comme ça j'aurais des glaçons illimités, puis la glace c'est beau.", "Un de mes animés préféré, les graphismes, les musiques et l'animation sont incroyable je trouve. L'histoire est magnifique aussi!", "C'est mon signe astrologique et je trouve qu'il me correspond bien."]

//var data = [{analogie:"une couleur", valeurAnalogie:"le violet"},{analogie:"un art", valeurAnalogie:"la musique"}, {analogie:"une pierre", valeurAnalogie:"l'aigüe-marine"}, {analogie:"une saveur de glace", valeurAnalogie:"la vanille"}, {analogie:"un super-pouvoir", valeurAnalogie:"la glace"}, {analogie:"un animé", valeurAnalogie:"Violet Evergarden"}, {analogie:"un signe du zodiaque", valeurAnalogie:'la Balance'}];

/*var numCase = 0;   
        document.querySelector('.fleche-gauche').addEventListener('click',function(clic){
            console.log('click');
            liste1.forEach(function(analogie) {
                document.querySelector('.analogies').innerHTML += "<section><h2>Si j’étais " + analogie + ", je serais " + liste2[numCase] + ".</h2></section>";
    
                numCase++;
            });
    });
*/
var numElem = 0;
afficheAna();
//detection clic flèche vers la droite
// +1 numElem    /!\ dernier element
document.querySelector('.fleche-gauche').addEventListener('click', function(clic){
    console.log('click');
    if(numElem < liste1.length - 1){
        numElem++;
    }
    else {
        numElem = 0
    }
    afficheAna();
});



//detection clic flèche vers la gauche
// -1 numElem    /!\ premier element
document.querySelector('.fleche-droite').addEventListener('click', function(clic){
    console.log('click');
    if(numElem > 0){
        numElem = numElem-1;
    }
    else {
        numElem = liste1.length - 1
    }
    afficheAna();
});

//code if pour pas qu'il y ait de undefined (aller trop loin)
// if numElem supérieur à nbr d'analogie (liste1) alors stop
//if numElem inférieur à 0 alors stop
/*
Aide :
length -> longueur d'un tableau
liste1.push("..."); -> ajouter un élément dans le tableaux unshift à la place de push pour ajouter un élément en DEBUT de table


if (numElem < liste1.length) {
    numElem++;
    afficheAna()
}
else {
    break;
}
*/


//code qui doit afficher numElem actuelle en analogie (fonction afficheAna)
function afficheAna() {
    console.log(numElem);
    document.querySelector('.analogies').innerHTML = "<section><h2>Si j’étais " + liste1[numElem] + ", je serais " + liste2[numElem] + ".</h2>" + "<img src=" + liste3[numElem] + " class='image'>" + "<p>" + liste4[numElem] + "</p></section>";
};


//code mentions légales
var cpt = 0;
document.querySelector('.volet-invisible').addEventListener('click',function(clic){
  if(cpt % 2 == 0){
    console.log('click');
    document.querySelector('.volet-invisible').animate([{height: '600px'}], {duration:800});
    setTimeout(function(){
      document.querySelector('.volet-invisible').setAttribute('class','volet-visible');
    }, 800);
    cpt++;
  }
  if(cpt % 2 == 1){
    document.querySelector('.volet-visible').setAttribute('class','volet-invisible');
    cpt++;
  }
});

/*document.querySelectorAll('image').forEach(function (element)  {
    element.style.border='solid 4px brown';
  });
  */

  document.querySelector('.formulaire').addEventListener('click',function(clic){
    console.log('click');
    document.querySelector('.form-invisible').classList.add('form-visible');
    document.querySelector('.form-invisible').classList.remove('form-invisible');
});



document.querySelector("#send").addEventListener('click', function (e) {
    // TP7 Q5 Personnalisation du lien affiché dans la console
    console.log("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=axelle.nigon&courriel=" + document.querySelector("#mail").value + "&message=Si j'étais ... " + document.querySelector("#ana").value + " je serais ... " + document.querySelector("#val").value);


    // TP7 Q6 Envoi des données à l'API à l'adresse ci-dessus
    var urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=axelle.nigon&courriel=" + document.querySelector("#mail").value + "&message=Si j'étais ... " + document.querySelector("#ana").value + " je serais ... " + document.querySelector("#val").value;

    fetch(urlVisitee).then(function (response) {
        response.json().then(function (data) {
            console.log("Réponse reçue : ")
            console.log(data);
            if(data.status == "success"){
            document.querySelector("#messageApresEnvoi").innerHTML = "Votre message a bien été reçu";
        }else{
            document.querySelector("#messageApresEnvoi").innerHTML = "Problème : votre message n'a pas été reçu";
        }
        })
    })

})

//Quand "Envoyer" est cliquer alors ajouter les éléments dans les listes correspondante    /!\ pas image

document.querySelector('#send').addEventListener('click',function(clic){
    console.log('click');
    var l1 = liste1.push(document.querySelector('#ana').value);
    console.log(liste1);
    var l2 = liste2.push(document.querySelector('#val').value);
    console.log(liste2);
    var l3 = liste3.push(document.querySelector('#formImg').value);
    console.log(liste3);
    var l4 = liste4.push(document.querySelector('#arg').value);
    console.log(liste4);
    document.querySelector('.form-visible').classList.add('form-invisible');
    document.querySelector('.form-visible').classList.remove('form-visible');
});