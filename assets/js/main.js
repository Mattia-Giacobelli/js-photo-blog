console.log('It works');

//Save the row domEl
const rowEl = document.querySelector('.row')
console.log(rowEl);

//Save pictures array
const pictures = []

//Create a ajax call to get the pictures array
fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => {
        data.forEach(pic => {
            pictures.push(pic)
        });
        stampCard(pictures, rowEl)
        console.log(pictures);
    })




//Create a function to generate a card for each picture
function stampCard(array, El) {

    array.forEach(pic => {
        console.log(pic);

        let card = `<div class="col">
            <div class="mycard" id="${pic.id}">
            <img src="${pic.url}" alt="">
            <div class="date">
            ${pic.date}
            </div>
            <h2>
            ${pic.title.toUpperCase()}
            </h2>
            <img  class="pin" src="./assets/img/pin.svg" alt="">
            </div>`
        //Stamp in page
        El.innerHTML += card
    })
}





//Open/close the overlay

//Create a function to change overlay's display property

//Create a function to get the card img src and stamp into the overlay

//Create event listener for each card and call the previous functions
const skateCard = document.getElementById('1')
const overlay = document.getElementById('overlay')
console.log(skateCard, overlay);


// skateCard.addEventListener('click', () => {
//     console.log('ciao');

// })