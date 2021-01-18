const showText1 = () => {
	let myParagraph = document.getElementById('tab-content');
	let image = document.getElementsByTagName("img")[0];
	image.src = "flowers.jpg";
	myParagraph.innerHTML = "Imagine an interface where the only way to find out whether a key on the keyboard is being pressed is to read the current state of that key. To be able to react to keypresses, you would have to constantly read the key’s state so that you’d catch it before it’s released again. It would be dangerous to perform other time-intensive computations since you might miss a keypress."
};

const showText2 = () => {
	let myParagraph = document.getElementById('tab-content');
	let image = document.getElementsByTagName("img")[0];
	let title = document.getElementById('link-2');
	image.src = "bread.jpg";
	myParagraph.innerHTML = "COUCOU. VOICI LE MEILLEUR PAIN DE FRANCE !!!!";
	title.style.color = "white"
	title.style.backgroundColor = "olive"
};



const showText3 = () => {
	document.removeEventListener('mouseout', mouseEvent);
	document.removeEventListener('mouseout', mouseEvent);
	let myParagraph = document.getElementById('tab-content');
	let image = document.getElementsByTagName("img")[0];
	image.src = "eggs.jpg";
	myParagraph.innerHTML = generateMenu()
};




generateMenu = () => {
	let main_courses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"]
	let techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"]
	let sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"]
	let seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"]

	let random_main_course = main_courses[Math.floor(Math.random()*main_courses.length)]
	let random_technique = techniques[Math.floor(Math.random()*techniques.length)]
	let random_side = sides[Math.floor(Math.random()*sides.length)]
	let random_seasoning = seasonings[Math.floor(Math.random()*seasonings.length)]

	let menu = `${random_main_course} ${random_technique}, avec ${random_side} ${random_seasoning}`

	return menu

};



const mouseEvent = e => {
    const shouldShowExitIntent = 
        !e.toElement && 
        !e.relatedTarget &&
        e.clientY < 10;

    if (shouldShowExitIntent) {
        document.removeEventListener('mouseout', mouseEvent);
        
        document.querySelector('.exit-intent-popup').classList.add('visible');
    }
};



const exit = e => {
    const shouldExit =
        [...e.target.classList].includes('exit-intent-popup') || // user clicks on mask
        e.target.className === 'close' || // user clicks on the close icon
        e.keyCode === 27; // user hits escape

    if (shouldExit) {
        document.querySelector('.exit-intent-popup').classList.remove('visible');
    }
};

const redCross = () => {
	 document.getElementsByClassName('close')[0].style.color = 'red';
};


document.getElementById('link-1').addEventListener("click", showText1);
document.getElementById('link-2').addEventListener("click", showText2);
document.getElementById('link-3').addEventListener("click", showText3);



document.querySelector('.exit-intent-popup').addEventListener('click', exit);



// 10sec waiting before any mouseover action
setTimeout(() => {
    document.addEventListener('mouseout', mouseEvent);
    document.addEventListener('keydown', exit);
    document.getElementsByClassName('close')[0].addEventListener('mouseover', redCross);
}, 10_000);




//https://medium.com/weekly-webtips/how-to-make-an-effective-exit-intent-popup-in-javascript-bf6051b4a6d4
// For later if I wnat to add the cookies option 






