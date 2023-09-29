// Exercice 1 - Saissisez un texte et affichez automatiquement la meme valeur dans le deuxieme input en dessous // 

// let input = document.querySelector('#input');
// let input2 = document.querySelector('#input2');
// // console.log(input);
// // console.log(input2);

// input.addEventListener('input', (event) => {
//     input2.value = event.target.value
// })

// Exercice 2 - Saississez un nombre et afficher automatiquement sa valeur carré et sa valeur cube //

// let input = document.querySelector('#input');
// let number = document.querySelector('.number');
// let square = document.querySelector('.square');
// let cube = document.querySelector('.cube');

// input.addEventListener('input', (event) => {
//     number.textContent = event.target.value;
//     square.textContent = event.target.value ** 2;
//     cube.textContent = event.target.value ** 3;
// })

// Exercice 3 - Afficher un carré bleu ainsi qu'un bouton nommé "bouge". Lors d'un click sur le bouton, le carré se déplace. //

// let square = document.querySelector('.square');
// let button = document.querySelector('button');

// let move = 100;
// let position = 0;

// button.addEventListener('click', () => {

//     if (position === 0) {
//         square.style.transform = `translate(0, 0)`;
//         position = 1;
//     } else if (position === 1) {
//         square.style.transform = `translate(${move}px, 0)`;
//         position = 2;
//     } else if (position === 2) {
//         square.style.transform = `translate(${move}px, ${move}px)`;
//         position = 3;
//     } else if (position === 3) {
//         square.style.transform = `translate(0, ${move}px)`;
//         position = 0;
//     }
// });


// Exercice 4 - Affichez des photos de petite taille sur la zone de droite, lorsqu'une des photos est cliquée, elle s'affiche automatiquement en grand dans la zone de gauche. Vous pouvez ajouter la légende en passant par l'attribut "alt" de la balise "img" //

let image = document.querySelector('.main-image');
let littleImages = document.querySelectorAll('.petite-image');
console.log(image);
console.log(littleImages);

littleImages.forEach((littleImage) => {
    littleImage.addEventListener('click', (event) => {
        
        document.querySelector('.petite-image.active').classList.remove('active');

        event.target.classList.add('active');

        image.src = event.target.src;
    })    
})
