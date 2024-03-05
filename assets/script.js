const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let tab = [];
tab = Object.values(slides);
console.log(tab);
const texte = document.querySelector(".texte");

let flecheDroite = document.querySelector("#fleche-droite");
let flecheGauche = document.querySelector("#fleche-gauche");
console.log(flecheDroite);
console.log(flecheGauche);
flecheDroite.addEventListener("click",()=>{
	console.log("droit");
	boutonDroit();
});
flecheGauche.addEventListener("click",()=>{
	console.log("gauche");
	boutonGauche();
});
let dots = document.querySelector(".dots");
for(let i=0; i< tab.length; i++){
	const dot = document.createElement("div");  // creation de l'element div
	dot.classList.add("dot");  // ajout de l'attribut dot a l'element div
	dots.appendChild(dot); // connexion de l'element dot a son parent
}
const image = document.querySelector(".banner-img");  // cible l'image 

let i = 0;  // variable global a incrementer
const boutonDroit = ()=>{
	i++;
	if(i >= tab.length) {
		i = 0;
	}
	image.src = "./assets/images/slideshow/"+tab[i].image;
	texte.innerHTML = tab[i].tagLine;
}

let j = 0;
const boutonGauche = ()=>{
	j--;
	if(j<=0){
		j = tab.length - 1;
	}
	image.src = "./assets/images/slideshow/"+tab[j].image;
	texte.innerHTML = tab[j].tagLine;
}


